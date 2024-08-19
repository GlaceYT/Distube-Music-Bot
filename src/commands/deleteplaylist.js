const { SlashCommandBuilder } = require('discord.js');
const Playlist = require('../models/Playlist');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('deleteplaylist')
    .setDescription('Delete a playlist.')
    .addStringOption(option => 
      option.setName('name')
        .setDescription('Name of the playlist.')
        .setRequired(true)),
  
  async execute(interaction) {
    const name = interaction.options.getString('name');
    const userId = interaction.user.id;

    const playlist = await Playlist.findOneAndDelete({ name, userId });
    if (!playlist) {
      return interaction.reply('Playlist not found or you do not have permission to delete it.');
    }

    await interaction.reply(`Playlist **${name}** has been deleted.`);
  },
};
