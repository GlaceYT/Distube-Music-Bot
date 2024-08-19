const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('loop')
    .setDescription('Set the repeat mode for the queue.')
    .addIntegerOption(option =>
      option.setName('mode')
        .setDescription('Repeat mode: 0 (Off), 1 (Song), 2 (Queue)')
        .setRequired(true)),

  async execute(interaction) {
    const mode = interaction.options.getInteger('mode');
    const channel = interaction.member.voice.channel;

   
    if (!channel) {
      const noChannelEmbed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('Error')
        .setDescription('❌ You need to be in a voice channel to set repeat mode.')
        .setTimestamp();

      return interaction.reply({ embeds: [noChannelEmbed], ephemeral: true });
    }

    try {
     
      const repeatMode = await interaction.client.playerManager.distube.setRepeatMode(channel, mode);

      const successEmbed = new EmbedBuilder()
        .setColor('#00ff00')
        .setTitle('Repeat Mode Set')
        .setDescription(`🔁 Repeat mode set to **${repeatMode === 0 ? 'Off' : repeatMode === 1 ? 'Song' : 'Queue'}**.`)
        .setTimestamp();

      await interaction.reply({ embeds: [successEmbed] });

    } catch (error) {
      console.error('Set Repeat Mode Error:', error);

      const errorEmbed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('Error')
        .setDescription('❌ An error occurred while setting the repeat mode. Please try again.')
        .setTimestamp();

      await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
    }
  },
};
