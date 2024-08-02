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
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const db = require('../Database/playlistdb');
const { createplaylist: lang } = require('../loadlanguage.js'); 
const musicIcons = require('../UI/icons/musicicons.js');
const { v4: uuidv4 } = require('uuid'); // Import the UUID generator

module.exports = {
  data: new SlashCommandBuilder()
    .setName('createplaylist')
    .setDescription(lang.description)
    .addStringOption(option => option.setName('name').setDescription(lang.nameDesc).setRequired(true))
    .addStringOption(option => option.setName('visibility').setDescription(lang.visibilityDesc).setRequired(true)),
  
  async execute(interaction) {
    const name = interaction.options.getString('name');
    const visibility = interaction.options.getString('visibility').toLowerCase() === 'public';
    const owner = interaction.user.id;
    const playlistId = uuidv4(); // Generate a unique ID for the playlist

    // Check if the playlist name already exists for this user
    db.get('SELECT * FROM playlists WHERE name = ? AND owner = ?', [name, owner], (err, row) => {
      if (err) {
        console.error('Database error:', err); 
        return interaction.reply({ content: `${lang.error} \nError details: ${err.message}`, ephemeral: true });
      }

      if (row) {
        return interaction.reply({ content: `${lang.errorPlaylistExists}`, ephemeral: true });
      }

      // Insert new playlist
      db.run('INSERT INTO playlists (id, name, songs, owner, isPublic) VALUES (?, ?, ?, ?, ?)', [playlistId, name, '', owner, visibility], function(err) {
        if (err) {
          console.error('Database error:', err); 
          return interaction.reply({ content: `${lang.error} \nError details: ${err.message}`, ephemeral: true });
        }

        const embed = new EmbedBuilder()
          .setColor('#00FF00')
          .setAuthor({ 
            name: lang.successTitle, 
            iconURL: musicIcons.correctIcon,
            url: "https://discord.gg/xQF9f9yUEM"
          })
          .setDescription(`${lang.successMessage} **${name}**.`)
          .addFields([
            { name: lang.visibilityLabel, value: visibility ? lang.public : lang.private },
          ]);

        interaction.reply({ embeds: [embed] });
      });
    });
  },
};
