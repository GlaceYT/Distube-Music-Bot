const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const { token } = require('../config/config.js');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`\x1b[31m[ CORE ]\x1b[0m \x1b[32mBot Name:  \x1b[0m${client.user.tag}`);

  
    const commands = [];
    const commandsPath = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    
    for (const file of commandFiles) {
      const command = require(path.join(commandsPath, file));
   
      commands.push(command.data.toJSON());
    }

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    try {


      await rest.put(
        Routes.applicationCommands(client.user.id),
        { body: commands }
      );
      console.log('\x1b[31m[ CORE ]\x1b[0m \x1b[32m%s\x1b[0m', 'Successfully reloaded Slash commands ✅');
    } catch (error) {
      console.error('Error deploying commands:', error);
    }
  },
};
