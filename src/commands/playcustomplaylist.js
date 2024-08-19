const { SlashCommandBuilder } = require('discord.js');
const Playlist = require('../models/Playlist');
const ytSearch = require('yt-search');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playcustomplaylist')
    .setDescription('Play your custom playlist.')
    .addStringOption(option => 
      option.setName('name')
        .setDescription('Name of the playlist.')
        .setRequired(true)),

  async execute(interaction) {
    const name = interaction.options.getString('name');
    const userId = interaction.user.id;

    const playlist = await Playlist.findOne({ name, userId });
    if (!playlist) {
      return interaction.reply('Playlist not found or you do not have permission to play it.');
    }

    const channel = interaction.member.voice.channel;
    if (!channel) {
      return interaction.reply('You need to be in a voice channel to play music.');
    }

    await interaction.deferReply();

    const songs = playlist.songs;
    const videoUrls = [];

    // Fetch URLs for each song in the playlist
    for (const song of songs) {
      const searchResult = await ytSearch(song);
      if (searchResult && searchResult.videos.length > 0) {
        videoUrls.push(searchResult.videos[0].url);
      }
    }

    if (videoUrls.length === 0) {
      return interaction.followUp('No songs found in the playlist.');
    }

    try {
      // Play the first song immediately
      await interaction.client.playerManager.distube.play(channel, videoUrls[0], {
        member: interaction.member,
        textChannel: interaction.channel,
        skip: true,
      });

      // Queue the rest of the songs
      for (let i = 1; i < videoUrls.length; i++) {
        await interaction.client.playerManager.distube.play(channel, videoUrls[i], {
          member: interaction.member,
          textChannel: interaction.channel,
          skip: false,
        });
      }

      await interaction.followUp(`Playing playlist **${name}**.`);
    } catch (error) {
      console.error('Play Error:', error);
      await interaction.followUp('There was an error playing the playlist.');
    }
  },
};
