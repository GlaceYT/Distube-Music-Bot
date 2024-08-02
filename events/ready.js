// events/ready.js
const { REST, Routes, ActivityType } = require('discord.js'); // Import ActivityType
const fs = require('fs');
const status = "AUTOMATIC";
const botName = "Music Bot [ Distube ]";
const Text = "GlaceYT";
const version = "Latest@ v4.0"; 
const startTime = Date.now();
const config = require('../config');

function printWatermark() {
  const uptimeInSeconds = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\x1b[1m\x1b[36m╔════════════════════════════════════════════╗');
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log(`\x1b[1m\x1b[36m            ${botName}     `);
  console.log(`\x1b[1m\x1b[36m            👑 Authorization : ${status}    `);
  console.log(`\x1b[1m\x1b[36m            💡 Version: ${version}`);
  console.log(`\x1b[1m\x1b[36m            📅 Uptime: ${uptimeInSeconds}s`);
  console.log(`\x1b[1m\x1b[36m            🚀 Powered by ${Text}`);
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log('\x1b[1m\x1b[36m╚════════════════════════════════════════════╝\x1b[0m');
}
printWatermark();

module.exports = async (client) => {
  console.log(`\x1b[31m[ CORE ]\x1b[0m \x1b[32mBot Name:  \x1b[0m${client.user.tag}`);
  console.log(`\x1b[31m[ CORE ]\x1b[0m \x1b[32mClient ID: \x1b[0m${client.user.id}`);
  
  const commands = [];
  fs.readdirSync('./commands').forEach(file => {
    const command = require(`../commands/${file}`);
    commands.push(command.data.toJSON());
  });

  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
  await rest.put(
    Routes.applicationCommands(client.user.id),
    { body: commands },
  );

  
  client.user.setActivity('Netflix', {
    type: ActivityType.Watching,
  });
};
