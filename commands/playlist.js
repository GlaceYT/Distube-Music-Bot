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
const musicIcons = require('../UI/icons/musicicons.js');
const { playlist: lang } = require('../loadlanguage.js'); 

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription(lang.pdescription)
    .addStringOption(option => option.setName('url').setDescription('The URL of the playlist').setRequired(true)),
  
  async execute(interaction, client) {
    const url = interaction.options.getString('url');
    const voiceChannel = interaction.member.voice.channel;

    if (!voiceChannel) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle(lang.titleError)
        .setDescription(lang.errorNotInVoiceChannel);
      return interaction.reply({ embeds: [embed] });
    }

    try {
      await interaction.deferReply();
      await client.distube.play(voiceChannel, url, { type: 'PLAYLIST' });

      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setTitle(lang.titlePlaylistAdded)
        .setDescription(lang.playlistAdded);
      
      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle(lang.titleError)
        .setDescription(lang.errorAddingPlaylist);
      await interaction.editReply({ embeds: [embed] });
    }
  },
};
