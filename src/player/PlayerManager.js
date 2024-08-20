
const { DisTube } = require('distube');
const PlayerQueue = require('./PlayerQueue');
const PlayerErrorHandler = require('./PlayerErrorHandler');
const PlayerEvents = require('./PlayerEvents');
const { SpotifyPlugin } = require('@distube/spotify');
const { YtDlpPlugin } = require('@distube/yt-dlp');
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YouTubePlugin } = require('@distube/youtube');
const fs = require("fs");
const { EmbedBuilder } = require('discord.js');
const config = require('../config/config');
require('dotenv').config();
class PlayerManager {
  constructor(client) {
    this.client = client;

    
    const plugins = [
        new SpotifyPlugin({
            api: { 
                clientId: config.spotify.clientId,
                clientSecret: config.spotify.clientSecret,
            }
        }),
        new SoundCloudPlugin(),
        new YouTubePlugin({
          cookies: [
            {
              domain: config.cookies.domain,
              expirationDate: config.cookies.expirationDate,
              hostOnly: config.cookies.hostOnly,
              httpOnly: config.cookies.httpOnly,
              name: config.cookies.name,
              path: config.cookies.path,
              sameSite: config.cookies.sameSite,
              secure: config.cookies.secure,
              session: config.cookies.session,
              value: config.cookies.value,
              id: config.cookies.id
            },
          ],
        }),
    ];

   
    this.distube = new DisTube(client, {
        plugins: plugins,
        ...config.distubeOptions,
    });

    this.queue = new PlayerQueue();
    this.errorHandler = new PlayerErrorHandler();
    this.events = new PlayerEvents(this.distube);

    this.initialize();
}

  initialize() {
    this.distube.on('playSong', (queue, song) => this.handlePlaySong(queue, song));
    this.distube.on('addSong', (queue, song) => this.handleAddSong(queue, song));
    this.distube.on('addList', (queue, playlist) => this.handleAddList(queue, playlist));
    this.distube.on('finish', (queue) => this.handleFinish(queue));
    this.distube.on('error', (error) => this.errorHandler.handleError(error));
    this.distube.on('disconnect', (queue) => this.handleDisconnect(queue));
    this.distube.on('empty', (queue) => this.handleEmpty(queue));
    this.distube.on('debug', (message) => console.debug(`DisTube Debug: ${message}`));
  }

  handlePlaySong(queue, song) {
    if (!queue || !queue.voiceChannel) {
      console.error('Queue or VoiceChannel is undefined');
      return;
    } else if (queue.textChannel) {
      const embed = new EmbedBuilder()
        .setColor('#0099ff') 
        .setTitle('Now Playing') 
        .setDescription(`🎶 **[${song.name}](${song.url})**`) 
        .addFields(
          { name: 'Tier', value: `**Free ( Non Premium)**`, inline: true },
        )
        .setTimestamp(); 

      
      if (song.duration) {
        embed.addFields({ name: 'Duration', value: `**${song.formattedDuration}**`, inline: true });
      }

      if (song.thumbnail) {
        embed.setImage(song.thumbnail); 
      }

      queue.textChannel.send({ embeds: [embed] });
    }
}


handleAddSong(queue, song) {
  if (!queue || !queue.voiceChannel) {
    console.error('Queue or VoiceChannel is undefined');
    return;
  }
  const embed = new EmbedBuilder()
    .setColor('#00ff00')
    .setTitle('Song Added to Queue')
    .setDescription(`- Song Name :  **${song.name}**\n- Channel : **${queue.voiceChannel}**`)
    .setTimestamp();

  queue.textChannel.send({ embeds: [embed] });
}


  handleAddList(queue, playlist) {
    if (!queue || !queue.voiceChannel) {
      console.error('Queue or VoiceChannel is undefined');
      return;
    }
    //console.log(`Added ${playlist.name} to the queue in ${queue.voiceChannel.name}`);
  }

  handleFinish(queue) {
    if (!queue || !queue.voiceChannel) {
      console.error('Queue or VoiceChannel is undefined');
      return;
    }
    //console.log(`Finished playing in ${queue.voiceChannel.name}`);
    this.queue.clear(queue.voiceChannel.id);
  }

  handleDisconnect(queue) {
    if (!queue || !queue.voiceChannel) {
      console.error('Queue or VoiceChannel is undefined');
      return;
    }
    //console.log(`Disconnected from ${queue.voiceChannel.name}`);
    this.queue.clear(queue.voiceChannel.id);
  }

  handleEmpty(queue) {
    if (!queue || !queue.voiceChannel) {
      console.error('Queue or VoiceChannel is undefined');
      return;
    }
    //console.log(`Voice channel ${queue.voiceChannel.name} is empty`);
    this.queue.clear(queue.voiceChannel.id);
  }

  async playSong(channel, song, options) {
    try {
      const queue = await this.distube.play(channel, song, options);
      this.queue.add(queue);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  async stop(channel) {
    try {
      const queue = this.queue.get(channel.id);
      if (queue) {
        await this.distube.stop(queue.voiceChannel);
        this.queue.clear(channel.id);
      }
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  async skip(channel) {
    try {
      const queue = this.queue.get(channel.id);
      if (queue) {
        await this.distube.skip(queue.voiceChannel);
      }
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  async leave(channel) {
    try {
      const queue = this.queue.get(channel.id);
      if (queue) {
        await this.distube.voices.get(queue.voiceChannel.id)?.leave();
        this.queue.clear(channel.id);
      }
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}

module.exports = PlayerManager;
