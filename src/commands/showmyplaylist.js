const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Playlist = require('../models/Playlist');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('showmyplaylist')
    .setDescription('Show your playlists.'),
  
  async execute(interaction) {
    const userId = interaction.user.id;
    const playlists = await Playlist.find({ userId });

    const embed = new EmbedBuilder()
      .setTitle('Your Playlists')
      .setColor('#00ff00');

    playlists.forEach(pl => {
      embed.addFields({
        name: `${pl.name} (${pl.isPublic ? 'Public' : 'Private'})`,
        value: `Songs: ${pl.songs.length}`,
      });
    });

    await interaction.reply({ embeds: [embed] });
  },
};
