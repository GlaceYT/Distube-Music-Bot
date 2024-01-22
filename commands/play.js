const { ApplicationCommandOptionType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require("../mongoDB");


let selectedThumbnailURL;

module.exports = {
  name: "play",
  description: "come one let's hear some music!!",
  permissions: "0x0000000000000800",
  options: [{
    name: 'name',
    description: 'Type the name of the music you want to play.',
    type: ApplicationCommandOptionType.String,
    required: true
  }],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {

      const name = interaction.options.getString('name')
      if (!name) return interaction.reply({ content: `❌ Enter a valid song name.`, ephemeral: true }).catch(e => { });
      let res;
      try {
        res = await client.player.search(name, {
          member: interaction.member,
          textChannel: interaction.channel,
          interaction
        });
      } catch (e) {
        return interaction.editReply({ content: `❌ No results` }).catch(e => { });
      }

      if (!res || !res.length || !res.length > 1) return interaction.reply({ content: `❌ No results`, ephemeral: true }).catch(e => { });

      const embed = new EmbedBuilder();
      embed.setColor(client.config.embedColor);
      embed.setTitle(`Found: ${name}`);

      const maxTracks = res.slice(0, 10);

      let track_button_creator = maxTracks.map((song, index) => {
        return new ButtonBuilder()
          .setLabel(`${index + 1}`)
          .setStyle(ButtonStyle.Secondary)
          .setCustomId(`${index + 1}`);
      });

      let buttons1;
      let buttons2;
      if (track_button_creator.length > 10) {
        buttons1 = new ActionRowBuilder().addComponents(track_button_creator.slice(0, 5));
        buttons2 = new ActionRowBuilder().addComponents(track_button_creator.slice(5, 10));
      } else {
        if (track_button_creator.length > 5) {
          buttons1 = new ActionRowBuilder().addComponents(track_button_creator.slice(0, 5));
          buttons2 = new ActionRowBuilder().addComponents(track_button_creator.slice(5, Number(track_button_creator.length)));
        } else {
          buttons1 = new ActionRowBuilder().addComponents(track_button_creator);
        }
      }

      let cancel = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Cancel")
          .setStyle(ButtonStyle.Danger)
          .setCustomId('cancel')
      );

      embed.setDescription(`${maxTracks.map((song, i) => `**${i + 1}**. [${song.name}](${song.url}) | \`${song.uploader.name}\``).join('\n')}\n\n✨Choose a song from below!!`);

      let code;
      if (buttons1 && buttons2) {
        code = { embeds: [embed], components: [buttons1, buttons2, cancel] };
      } else {
        code = { embeds: [embed], components: [buttons1, cancel] };
      }

      interaction.reply(code).then(async Message => {
        const filter = i => i.user.id === interaction.user.id;
        let collector = await Message.createMessageComponentCollector({ filter, time: 60000 });

        collector.on('collect', async (button) => {
          switch (button.customId) {
            case 'cancel': {
              embed.setDescription(`Search interrupted`);
              await interaction.editReply({ embeds: [embed], components: [] }).catch(e => { });
              return collector.stop();
            }
            break;
            default: {
              selectedThumbnailURL = maxTracks[Number(button.customId) - 1].thumbnail;
              embed.setThumbnail(selectedThumbnailURL);
              embed.setDescription(`**${res[Number(button.customId) - 1].name}**`);
              await interaction.editReply({ embeds: [embed], components: [] }).catch(e => { });
              try {
                await client.player.play(interaction.member.voice.channel, res[Number(button.customId) - 1].url, {
                  member: interaction.member,
                  textChannel: interaction.channel,
                  interaction
                });
              } catch (e) {
                await interaction.editReply({ content: `❌ No results!`, ephemeral: true }).catch(e => { });
              }
              return collector.stop();
            }
          }
        });

        collector.on('end', (msg, reason) => {
          if (reason === 'time') {
            embed.setDescription(lang.msg80);
            return interaction.editReply({ embeds: [embed], components: [] }).catch(e => { });
          }
        });
      }).catch(e => { });
    } catch (e) {
      console.error(e);
    }
  },
};
module.exports.selectedThumbnailURL = selectedThumbnailURL;
