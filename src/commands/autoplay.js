const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('autoplay')
    .setDescription('Toggle autoplay mode.'),

  async execute(interaction) {
    const channel = interaction.member.voice.channel;

    if (!channel) {
      const noChannelEmbed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('Error')
        .setDescription('❌ You need to be in a voice channel to toggle autoplay.')
        .setTimestamp();

      return interaction.reply({ embeds: [noChannelEmbed], ephemeral: true });
    }

    try {
      const autoplay = interaction.client.playerManager.distube.toggleAutoplay(channel);

      const autoplayEmbed = new EmbedBuilder()
        .setColor(autoplay ? '#00ff00' : '#ff9900')
        .setTitle('Autoplay Toggled')
        .setDescription(`🔄 Autoplay has been **${autoplay ? 'enabled' : 'disabled'}**.`)
        .setTimestamp();

      await interaction.reply({ embeds: [autoplayEmbed] });

    } catch (error) {
      console.error('Toggle Autoplay Error:', error);

      const errorEmbed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('Error')
        .setDescription('❌ An error occurred while toggling autoplay. Please try again later.')
        .setTimestamp();

      await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
    }
  },
};
