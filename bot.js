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
const { YouTubePlugin } = require('@distube/youtube');
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


const youtubeCookies = [
  {
    name: 'PREF',
    value: 'f4=4000000&tz=Asia.Calcutta',
    domain: '.youtube.com',
    path: '/',
    expires: 1757847365.633691,
    httpOnly: false,
    secure: true,
    session: false
  },
  {
    name: 'VISITOR_PRIVACY_METADATA',
    value: 'CgJJThIEGgAgIg%3D%3D',
    domain: '.youtube.com',
    path: '/',
    expires: 1738839364.570015,
    httpOnly: true,
    secure: true,
    session: false,
    sameSite: 'None'
  },
  {
    name: 'YSC',
    value: 'bcGhofX2yAU',
    domain: '.youtube.com',
    path: '/',
    expires: -1,
    httpOnly: true,
    secure: true,
    session: true,
    sameSite: 'None'
  },
  {
    name: 'VISITOR_INFO1_LIVE',
    value: 'H5Rn0cV5XxA',
    domain: '.youtube.com',
    path: '/',
    expires: 1738839364.569995,
    httpOnly: true,
    secure: true,
    session: false,
    sameSite: 'None'
  },
  {
    name: 'GPS',
    value: '1',
    domain: '.youtube.com',
    path: '/',
    expires: 1723289164.569805,
    httpOnly: true,
    secure: true,
    session: false,
    sameSite: 'None'
  }
];



client.distube = new DisTube(client, {
  plugins: [
      new YouTubePlugin({
          cookies: youtubeCookies, 
      }),
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
