const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Playlist = require('../models/Playlist');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('showallplaylists')
    .setDescription('Show all playlists.'),
  
  async execute(interaction) {
    const playlists = await Playlist.find({
      name: { $exists: true },
      userId: { $exists: true },
      isPublic: { $exists: true },
      songs: { $exists: true }
    });

    if (playlists.length === 0) {
      return interaction.reply({ content: 'No playlists found.', ephemeral: true });
    }

    const embeds = [];
    let currentEmbed = new EmbedBuilder()
      .setTitle('All Playlists')
      .setColor('#0099ff');

    playlists.forEach((pl, index) => {
      if (index % 15 === 0 && index !== 0) {
  
        embeds.push(currentEmbed);
        currentEmbed = new EmbedBuilder()
          .setTitle('All Playlists (Continued)')
          .setColor('#0099ff');
      }

      currentEmbed.addFields({
        name: `${pl.name} (${pl.isPublic ? 'Public' : 'Private'})`,
        value: `User: <@${pl.userId}>, Songs: ${pl.songs.length}`,
      });
    });

  
    embeds.push(currentEmbed);


    for (const embed of embeds) {
      await interaction.reply({ embeds: [embed] });
    }
  },
};
