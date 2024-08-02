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
const db = require('../Database/playlistdb.js');
const { showplaylistsongs: lang } = require('../loadlanguage.js'); 
const musicIcons = require('../UI/icons/musicicons.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('showplaylistsongs')
    .setDescription(lang.description)
    .addStringOption(option => option.setName('playlist').setDescription(lang.playlistDesc).setRequired(true)),
  async execute(interaction, client) {
    const playlistName = interaction.options.getString('playlist');
    const userId = interaction.user.id;

    db.get('SELECT * FROM playlists WHERE name = ? AND (owner = ? OR isPublic = 1)', [playlistName, userId], (err, playlist) => {
      if (err) {
        console.error(err);
        return interaction.reply({ content: lang.errorAccess, ephemeral: true });
      }

      if (!playlist) {
        return interaction.reply({ content: lang.errorNotFound, ephemeral: true });
      }

      const songList = playlist.songs ? playlist.songs.split(',').map((song, index) => `${index + 1}. ${song}`).join('\n') : lang.noSongs;

      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setAuthor({ 
          name: `${lang.title} ${playlistName}`, 
          iconURL: musicIcons.playlistIcon,
          url: "https://discord.gg/xQF9f9yUEM"
        })
        .setDescription(songList)
        .setTimestamp();

      interaction.reply({ embeds: [embed] });
    });
  },
};
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
 