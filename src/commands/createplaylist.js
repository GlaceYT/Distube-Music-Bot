const { SlashCommandBuilder } = require('discord.js');
const Playlist = require('../models/Playlist'); 

module.exports = {
  data: new SlashCommandBuilder()
    .setName('createplaylist')
    .setDescription('Create a new playlist.')
    .addStringOption(option => 
      option.setName('name')
        .setDescription('Name of the playlist.')
        .setRequired(true))
    .addBooleanOption(option => 
      option.setName('public')
        .setDescription('Is the playlist public?')
        .setRequired(true)),
  
  async execute(interaction) {
    const name = interaction.options.getString('name');
    const isPublic = interaction.options.getBoolean('public');
    const userId = interaction.user.id;

    const playlist = new Playlist({ userId, name, isPublic });
    await playlist.save();

    await interaction.reply(`Playlist **${name}** has been created.`);
  },
};
