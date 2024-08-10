process.env.YTDL_NO_UPDATE = '1';
require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const config = require('./config');
const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { YtDlpPlugin } = require('@distube/yt-dlp');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { DeezerPlugin } = require('@distube/deezer');
const { DirectLinkPlugin } = require('@distube/direct-link');
const path = require('path');

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });
  
client.commands = new Collection();
client.config = config;

fs.readdirSync('./commands').forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
});

const eventFiles = fs.readdirSync(path.join(__dirname, 'events')).filter(file => file.endsWith('.js'));

eventFiles.forEach(file => {
  const event = require(`./events/${file}`);
  const eventName = file.split('.')[0];
  
  if (typeof event === 'function') {
    client.on(eventName, event.bind(null, client));
  } else {
    console.error(`Event handler in ${file} is not a function.`, event);
  }
});




client.distube = new DisTube(client, {
  plugins: [
     
      new SpotifyPlugin(),
      new SoundCloudPlugin(),
      new DeezerPlugin(),
      new DirectLinkPlugin(),
      new YtDlpPlugin(),
  ],
  emitNewSongOnly: true,
  savePreviousSongs: true,
  nsfw: false,
});

require('./events/distubeEvents')(client);

const express = require("express");
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    const imagePath = path.join(__dirname, 'index.html');
    res.sendFile(imagePath);
});
app.listen(port, () => {
    console.log(`🔗 Listening to GlaceYT : http://localhost:${port}`);
});


client.login(process.env.TOKEN);

module.exports = client;


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
