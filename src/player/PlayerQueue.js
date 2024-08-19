class PlayerQueue {
    constructor() {
      this.queues = new Map();
    }
  
    add(queue) {
      this.queues.set(queue.voiceChannel.id, queue);
    }
  
    get(voiceChannelId) {
      return this.queues.get(voiceChannelId);
    }
  
    clear(voiceChannelId) {
      this.queues.delete(voiceChannelId);
    }
  
    clearAll() {
      this.queues.clear();
    }
  }
  
  module.exports = PlayerQueue;
  