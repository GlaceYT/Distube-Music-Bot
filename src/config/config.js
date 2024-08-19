// config/config.js
module.exports = {
    token: '',
    clientId: '1273230302822797312',
    guildId: '1106591466651922502',
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
   },
    distubeOptions: { 
        emitNewSongOnly: false, 
        savePreviousSongs: true, 
      },
  };
