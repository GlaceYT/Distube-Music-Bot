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
const { showallplaylists: lang } = require('../loadlanguage.js'); 
const musicIcons = require('../UI/icons/musicicons.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('showallplaylists')
    .setDescription(lang.description),
  async execute(interaction) {
    db.all('SELECT * FROM playlists', [], async (err, rows) => {
      if (err) {
        return interaction.reply({ content: lang.error, ephemeral: true });
      }

      if (rows.length === 0) {
        return interaction.reply({ content: lang.noPlaylists, ephemeral: true });
      }

      const playlistsPerEmbed = 10;
      const totalEmbeds = Math.ceil(rows.length / playlistsPerEmbed);

      for (let i = 0; i < totalEmbeds; i++) {
        const embed = new EmbedBuilder()
          .setColor('#00FF00')
          .setTitle(`${lang.title} - ${lang.page} ${i + 1}`)
          .setDescription(
            rows.slice(i * playlistsPerEmbed, (i + 1) * playlistsPerEmbed)
                .map(playlist => {
                  const songCount = playlist.songs ? playlist.songs.split(',').length : 0;
                  return `**${playlist.name}** (${songCount} ${lang.songs}) - ${lang.by} <@${playlist.owner}>, ${lang.visibility}: ${playlist.isPublic ? lang.public : lang.private}`;
                })
                .join('\n')
          );

        await interaction.reply({ embeds: [embed] });

        if (i < totalEmbeds - 1) await new Promise(resolve => setTimeout(resolve, 1000));
      }
    });
  },
};
