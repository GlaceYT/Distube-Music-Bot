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
const { addsong: lang } = require('../loadlanguage.js'); 
const musicIcons = require('../UI/icons/musicicons.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('addsong')
    .setDescription(lang.description)
    .addStringOption(option => option.setName('playlist').setDescription(lang.playlistDesc).setRequired(true))
    .addStringOption(option => option.setName('song').setDescription(lang.songDesc).setRequired(true)),
  async execute(interaction, client) {
    const playlistName = interaction.options.getString('playlist');
    const song = interaction.options.getString('song');
    const userId = interaction.user.id;

    db.get('SELECT * FROM playlists WHERE name = ? AND owner = ?', [playlistName, userId], (err, playlist) => {
      if (err) {
        return interaction.reply(lang.errorAccess);
      }

      if (!playlist) {
        return interaction.reply(lang.errorNotFound);
      }

      let songUrls = playlist.songs ? playlist.songs.split(',') : [];
      songUrls.push(song);

      db.run('UPDATE playlists SET songs = ? WHERE name = ? AND owner = ?', [songUrls.join(','), playlistName, userId], function(err) {
        if (err) {
          return interaction.reply(lang.errorAdd);
        }
        const embed = new EmbedBuilder()
          .setColor('#00FF00')
          .setAuthor({ 
            name: lang.successTitle, 
            iconURL: musicIcons.correctIcon,
            url: "https://discord.gg/xQF9f9yUEM"
          })
          .setDescription(`${lang.addedSong} **${song}** ${lang.toPlaylist} **${playlistName}**.`);
        interaction.reply({ embeds: [embed] });
      });
    });
  },
};
