require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const { google } = require('googleapis');
const yt = google.youtube('v3');
const ytSearch = require('yt-search');
const SpotifyWebApi = require('spotify-web-api-node');

const { youtubeApiKey, spotify } = require('../config/config');
const API_KEY = youtubeApiKey;
const spotifyApi = new SpotifyWebApi({
  clientId: spotify.clientId,
  clientSecret: spotify.clientSecret,
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Search and play a song or playlist.')
    .addSubcommand(subcommand =>
      subcommand
        .setName('search')
        .setDescription('Search for and play a song.')
        .addStringOption(option =>
          option.setName('query')
            .setDescription('The song to search for')
            .setRequired(true)))
    .addSubcommand(subcommand =>
      subcommand
        .setName('playlist')
        .setDescription('Play a playlist from YouTube.')
        .addStringOption(option =>
          option.setName('url')
            .setDescription('The URL of the YouTube playlist')
            .setRequired(true)))
    .addSubcommand(subcommand =>
      subcommand
        .setName('spotify')
        .setDescription('Play a song or playlist from Spotify.')
        .addStringOption(option =>
          option.setName('url')
            .setDescription('The URL of the Spotify track or playlist')
            .setRequired(true))),

  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();
    const query = interaction.options.getString('query') || interaction.options.getString('url');
    const channel = interaction.member.voice.channel;

    if (!channel) {
      return interaction.reply({
        embeds: [new EmbedBuilder().setColor('#FFFF00').setDescription('🚫 You need to be in a voice channel to play music.')],
        ephemeral: true,
      });
    }

    try {
      await interaction.deferReply();

      if (subcommand === 'playlist') {
        const playlistIdMatch = query.match(/list=([^&]+)/);
        if (playlistIdMatch) {
          const playlistId = playlistIdMatch[1];

          const playlistResponse = await yt.playlistItems.list({
            key: API_KEY,
            part: 'snippet',
            playlistId: playlistId,
            maxResults: 50,
          });

          const videos = playlistResponse.data.items;

          if (videos.length === 0) {
            return interaction.followUp({
              embeds: [new EmbedBuilder().setColor('#FFFF00').setDescription('🚫 No videos found in the playlist.')],
            });
          }

          const videoUrls = videos.map(video => `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`);

          await interaction.client.playerManager.distube.play(channel, videoUrls[0], {
            member: interaction.member,
            textChannel: interaction.channel,
            skip: true,
          });

          for (let i = 1; i < videoUrls.length; i++) {
            await interaction.client.playerManager.distube.play(channel, videoUrls[i], {
              member: interaction.member,
              textChannel: interaction.channel,
              skip: false,
            });
          }

          await interaction.followUp({
            embeds: [
              new EmbedBuilder()
                .setColor('#FF00FF')
                .setDescription(`🎶 Queued **${videos.length}** songs from the playlist.`),
            ],
          });
          return;
        } else {
          return interaction.followUp({
            embeds: [new EmbedBuilder().setColor('#FFFF00').setDescription('🚫 Invalid playlist URL.')],
          });
        }
      }

      if (subcommand === 'search') {
        const searchResult = await ytSearch(query);

        if (!searchResult || !searchResult.videos.length) {
          return interaction.followUp({
            embeds: [new EmbedBuilder().setColor('#FFFF00').setDescription('🚫 No songs found for your query.')],
          });
        }

        const videos = searchResult.videos.slice(0, 5);

        const embed = new EmbedBuilder()
          .setTitle('Search Results')
          .setDescription('Select a song to play:')
          .setColor('#ff0000');
        
        videos.forEach((video, index) => {
          embed.addFields({
            name: `${index + 1}. ${video.title}`,
            value: `Duration: ${video.timestamp} | ${video.author.name}`,
            inline: false,
          });
        });
        
        const row1 = new ActionRowBuilder();
        
        videos.forEach((video, index) => {
          row1.addComponents(
            new ButtonBuilder()
              .setCustomId(`play_${index}`)
              .setLabel(`${index + 1}`)
              .setStyle(ButtonStyle.Primary)
          );
        });
        
        const sentMessage = await interaction.followUp({ embeds: [embed], components: [row1] });
        

        const filter = i => i.customId.startsWith('play_') && i.user.id === interaction.user.id;
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async i => {
          const [action, index] = i.customId.split('_');
          const selectedVideo = videos[parseInt(index)];

          if (selectedVideo) {
            try {
              await i.deferUpdate();

              await interaction.client.playerManager.distube.play(channel, selectedVideo.url, {
                member: interaction.member,
                textChannel: interaction.channel,
              });

              const disabledRow1 = new ActionRowBuilder().addComponents(
                row1.components.map(button => button.setDisabled(true))
              );


              await sentMessage.edit({ components: [disabledRow1] });
              await interaction.followUp({
                embeds: [
                  new EmbedBuilder()
                    .setColor('#FF00FF')
                    .setDescription(`🎶 Queued: **${selectedVideo.title}**`),
                ],
                ephemeral: true,
              });

            } catch (error) {
              console.error('Play Error:', error);
              await interaction.followUp({
                embeds: [new EmbedBuilder().setColor('#FFFF00').setDescription('🚫 An error occurred while trying to play the song.')],
              });
            }
          } else {
            await i.followUp({
              embeds: [new EmbedBuilder().setColor('#FFFF00').setDescription('🚫 The selected song could not be found.')],
              ephemeral: true,
            });
          }

          collector.stop();
        });

        collector.on('end', collected => {
          if (!collected.size) {
            interaction.editReply({
              embeds: [new EmbedBuilder().setColor('#FFFFFF').setDescription('⚠️ You didn\'t select any song in time.')],
            });
          }
        });

      }else if (subcommand === 'spotify') {
        const isSpotifyPlaylist = query.includes('playlist');
        const isSpotifyTrack = query.includes('track');
        const isSpotifyAlbum = query.includes('album');
        const isSpotifyArtist = query.includes('artist');
        const isSpotifyCollection = query.includes('collection');
    
        if (isSpotifyPlaylist || isSpotifyTrack || isSpotifyAlbum || isSpotifyArtist || isSpotifyCollection) {
            try {
                const accessToken = await spotifyApi.clientCredentialsGrant().then(
                    data => data.body['access_token'],
                    error => {
                        throw new Error('SpotifyAccessError');
                    }
                );
    
                spotifyApi.setAccessToken(accessToken);
                let trackNames = [];
                let playlistInfo;
    
                if (isSpotifyTrack) {
                    const trackId = query.split('track/')[1].split('?')[0];
                    const trackInfo = await spotifyApi.getTrack(trackId);
                    trackNames.push(`${trackInfo.body.name} ${trackInfo.body.artists[0].name}`);
                } else if (isSpotifyPlaylist) {
                    const playlistId = query.split('playlist/')[1].split('?')[0];
                    playlistInfo = await spotifyApi.getPlaylistTracks(playlistId);
                    trackNames = playlistInfo.body.items
                        .filter(item => item && item.track)
                        .map(item => `${item.track.name} ${item.track.artists[0]?.name || ''}`);
                } else if (isSpotifyAlbum) {
                    const albumId = query.split('album/')[1].split('?')[0];
                    const albumInfo = await spotifyApi.getAlbumTracks(albumId);
                    trackNames = albumInfo.body.items
                        .map(track => `${track.name} ${track.artists[0]?.name || ''}`);
                } else if (isSpotifyArtist) {
                    const artistId = query.split('artist/')[1].split('?')[0];
                    const artistTopTracks = await spotifyApi.getArtistTopTracks(artistId, 'US');
                    trackNames = artistTopTracks.body.tracks
                        .map(track => `${track.name} ${track.artists[0]?.name || ''}`);
                } else if (isSpotifyCollection) {
                    return; // Handle Spotify collection if needed
                }
    
                const queuedTracks = [];
                const videoUrls = [];
    
                for (const trackName of trackNames) {
                    try {
                        const searchResult = await ytSearch(trackName);
                        if (searchResult && searchResult.videos.length > 0) {
                            const video = searchResult.videos[0];
                            videoUrls.push(video.url);
                            queuedTracks.push(video.title);
                        }
                    } catch (error) {
                        if (error.errorCode === 'NON_NSFW') {
                            await interaction.followUp({
                                embeds: [
                                    new EmbedBuilder()
                                        .setColor('#FF0000')
                                        .setDescription(`🚫 Skipped age-restricted content: **${trackName}**. This track cannot be played in non-NSFW channels.`),
                                ],
                            });
                            continue;
                        } else {
                            throw error;
                        }
                    }
                }
    
                if (queuedTracks.length > 0) {
                    await interaction.client.playerManager.distube.play(channel, videoUrls[0], {
                        member: interaction.member,
                        textChannel: interaction.channel,
                        skip: true,
                    });
    
                    for (let i = 1; i < videoUrls.length; i++) {
                        await interaction.client.playerManager.distube.play(channel, videoUrls[i], {
                            member: interaction.member,
                            textChannel: interaction.channel,
                            skip: false,
                        });
                    }
    
                    await interaction.followUp({
                        embeds: [
                            new EmbedBuilder()
                                .setColor('#FF00FF')
                                .setDescription(`🎶 Queued **${queuedTracks.length}** tracks from Spotify.`),
                        ],
                    });
                } else {
                    await interaction.followUp({
                        embeds: [
                            new EmbedBuilder()
                                .setColor('#FFFF00')
                                .setDescription('🚫 No valid tracks found from Spotify.'),
                        ],
                    });
                }
    
            } catch (error) {
                let errorMessage = '🚫 An error occurred while trying to play from Spotify.';
                if (error.message === 'SpotifyAccessError') {
                    errorMessage = '🚫 Failed to retrieve a Spotify access token.';
                }
    
                await interaction.followUp({
                    embeds: [new EmbedBuilder().setColor('#FFFF00').setDescription(errorMessage)],
                });
            }
        } else {
            await interaction.followUp({
                embeds: [new EmbedBuilder().setColor('#FFFF00').setDescription('🚫 Invalid Spotify URL.')],
            });
        }
    }
    
    } catch (error) {
      //console.error('Error:', error);
      await interaction.followUp({
        embeds: [new EmbedBuilder().setColor('#FFFF00').setDescription('🚫 An error occurred while processing your request.')],
      });
    }
  },
};
