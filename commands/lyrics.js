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
const Genius = require('genius-lyrics');
const { GENIUS_API_TOKEN } = require('../config.js');
const GeniusClient = new Genius.Client(GENIUS_API_TOKEN);
const { lyrics: lang } = require('../loadlanguage.js');
const musicIcons = require('../UI/icons/musicicons.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('lyrics')
    .setDescription(lang.description)
    .addStringOption(option =>
      option.setName('song')
        .setDescription(lang.songDescription)
        .setRequired(true)),
  async execute(interaction) {
    try {
      const songName = interaction.options.getString('song');
      const searches = await GeniusClient.songs.search(songName);

      if (!searches.length) {
        return interaction.reply({ content: lang.noLyricsFound, ephemeral: true });
      }

      const song = searches[0];
      const lyrics = await song.lyrics();

      if (lyrics.length > 2000) {
        const splitLyrics = [lyrics.slice(0, 2000), lyrics.slice(2000)];
        
        const embed1 = new EmbedBuilder()
          .setColor('#0099ff')
          .setTitle(`Lyrics for ${song.fullTitle} (Part 1)`)
          .setDescription(splitLyrics[0]);

        const embed2 = new EmbedBuilder()
          .setColor('#0099ff')
          .setTitle(`Lyrics for ${song.fullTitle} (Part 2)`)
          .setDescription(splitLyrics[1]);

        return interaction.reply({ embeds: [embed1, embed2] });
      }

      const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`Lyrics for ${song.fullTitle}`)
        .setDescription(lyrics);

      await interaction.reply({ embeds: [embed] });
    } catch (error) {

      await interaction.reply({ content: 'An error occurred while fetching lyrics. Please try again later.', ephemeral: true });
    }
  },
};
