require('dotenv').config(); 
module.exports = {
    token: '',
    clientId: 'botid',
    guildId: 'yourserverid',
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    mongoUri: process.env.MONGO_URI,
    spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
   },
    distubeOptions: { 
        emitNewSongOnly: false, 
        savePreviousSongs: true, 
      },
  };
