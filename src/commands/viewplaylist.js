const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Playlist = require('../models/Playlist');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('viewplaylist')
    .setDescription('View songs in a playlist.')
    .addStringOption(option => 
      option.setName('name')
        .setDescription('Name of the playlist.')
        .setRequired(true)),
  
  async execute(interaction) {
    const name = interaction.options.getString('name');
    const userId = interaction.user.id;

    const playlist = await Playlist.findOne({ name });
    if (!playlist) {
      return interaction.reply({ content: 'Playlist not found.', ephemeral: true });
    }

    if (!playlist.isPublic && playlist.userId !== userId) {
      return interaction.reply({ content: 'You do not have permission to view this playlist.', ephemeral: true });
    }

    if (playlist.songs.length === 0) {
      return interaction.reply({ content: 'This playlist has no songs.', ephemeral: true });
    }

    const embed = new EmbedBuilder()
      .setTitle(`Playlist: ${playlist.name}`)
      .setDescription(playlist.songs.join('\n'))
      .setColor('#ff0000');

    await interaction.reply({ embeds: [embed] });
  },
};
