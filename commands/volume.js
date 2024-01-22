const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const maxVol = require("../config.js").opt.maxVol;
const db = require("../mongoDB");

module.exports = {
  name: "volume",
  description: "Allows you to adjust the music volume.",
  permissions: "0x0000000000000800",
  options: [{
    name: 'volume',
    description: 'Type the number to adjust the volume.',
    type: ApplicationCommandOptionType.Integer,
    required: true
  }],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ No music playing!!', ephemeral: true });
      }

      const vol = parseInt(interaction.options.getInteger('volume'));

      if (!vol) {
        return interaction.reply({
          content: `Current volume: **${queue.volume}** 🔊\nTo change the volume, type a number between \`1\` and \`${maxVol}\`.`,
          ephemeral: true
        });
      }

      if (queue.volume === vol) {
        return interaction.reply({ content: 'Current volume is already set to **' + vol + '**!', ephemeral: true });
      }

      if (vol < 1 || vol > maxVol) {
        return interaction.reply({
          content: `Please type a number between \`1\` and \`${maxVol}\`.`,
          ephemeral: true
        });
      }

      const success = queue.setVolume(vol);

      if (success) {
        const embed = new EmbedBuilder()
          .setColor('#d291fe')
          .setAuthor({
        name: 'Your Music! Your Rules!',
        iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157528025739563088/5657-volume-icon.png?ex=6518ef7b&is=65179dfb&hm=1797c2830537a28b5c6a57564517cc509146d02383a69fb4239d7b5d55aceeed&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
          .setDescription(`**Adjusting Volume : ** **${vol}/${maxVol}**`);

        return interaction.reply({ embeds: [embed] });
      } else {
        return interaction.reply({ content: '❌ Something went wrong while changing the volume.', ephemeral: true });
      }
    } catch (e) {
      console.error(e);
    }
  },
};
