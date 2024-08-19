class PlayerEvents {
    constructor(distube) {
      this.distube = distube;
    }
  
    handlePlaySong(queue, song) {
      console.log(`Now playing ${song.name} in ${queue.voiceChannel.name}`);
      if (queue.textChannel) {
        queue.textChannel.send(`🎶 Now playing **${song.name}** in **${queue.voiceChannel.name}**`);
      }
    }
  
    handleAddSong(queue, song) {
      console.log(`Added ${song.name} to the queue in ${queue.voiceChannel.name}`);
    }
  
    handleAddList(queue, playlist) {
      console.log(`Added ${playlist.name} to the queue in ${queue.voiceChannel.name}`);

    }
  
    handleFinish(queue) {
      console.log(`Finished playing in ${queue.voiceChannel.name}`);
     
    }
  }
  
  module.exports = PlayerEvents;
  