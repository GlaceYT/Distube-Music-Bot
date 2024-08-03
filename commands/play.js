/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const yts = require('yt-search');
const lang = require('../loadlanguage.js'); 
const musicIcons = require('../UI/icons/musicicons.js');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription(lang.findDescription)
    .addStringOption(option => option.setName('query').setDescription('The search query').setRequired(true)),

  async execute(interaction, client) {
    const query = interaction.options.getString('query');
    const voiceChannel = interaction.member.voice.channel;

    if (!voiceChannel) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setAuthor({ 
          name: 'Alert!', 
          iconURL: musicIcons.dotIcon,
          url: "https://discord.gg/xQF9f9yUEM"
        })
        .setDescription(lang.findNoVoiceChannel);
      return interaction.reply({ embeds: [embed] });
    }

    try {
      // Defer the reply to give more time for processing the search results
      await interaction.deferReply();

      const searchResults = await yts(query);
      const videos = searchResults.videos.slice(0, 10);

      if (videos.length === 0) {
        const embed = new EmbedBuilder()
          .setColor('#FF0000')
          .setAuthor({ 
            name: 'No Results!', 
            iconURL: musicIcons.dotIcon,
            url: "https://discord.gg/xQF9f9yUEM"
          })
          .setDescription(lang.findNoResults);
        return interaction.followUp({ embeds: [embed] });
      }

      const rows = [];
      for (let i = 0; i < videos.length; i += 5) {
        const buttons = videos.slice(i, i + 5).map((video, index) =>
          new ButtonBuilder()
            .setCustomId(`play_${i + index}`)
            .setLabel(`${i + index + 1}`)
            .setStyle(ButtonStyle.Primary)
        );
        rows.push(new ActionRowBuilder().addComponents(buttons));
      }

      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setTitle(lang.findTitle)
        .setDescription(lang.findPrompt)
        .addFields(videos.map((video, i) => ({
          name: `${i + 1}. ${video.title}`,
          value: `${video.timestamp} | ${video.author.name}`,
          inline: false
        })));

      await interaction.followUp({ embeds: [embed], components: rows });

      const filter = i => i.customId.startsWith('play_') && i.user.id === interaction.user.id;
      const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

      collector.on('collect', async i => {
        const index = parseInt(i.customId.split('_')[1], 10);
        const video = videos[index];

        await i.reply({ content: lang.findSongSelected.replace('{title}', video.title), ephemeral: true });

        try {
          // Use distube.play to either start playing or add to the queue
          await client.distube.play(voiceChannel, video.url, {
            member: interaction.member,
            textChannel: interaction.channel,
          });

          rows.forEach(row => {
            row.components.forEach(button => button.setDisabled(true));
          });

          await interaction.editReply({ components: rows });

        } catch (error) {
          console.error(error);
          await i.reply({ content: 'An error occurred while adding the song to the queue.', ephemeral: true });
        }
      });

      collector.on('end', collected => {
        if (collected.size === 0) {
          rows.forEach(row => {
            row.components.forEach(button => button.setDisabled(true));
          });
          interaction.editReply({ components: rows });
        }
      });

    } catch (error) {
      console.error(error);
      await interaction.followUp('An error occurred while searching for the song.');
    }
  },
};
