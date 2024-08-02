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
const lang = require('../loadlanguage.js'); 
const musicIcons = require('../UI/icons/musicicons.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('pause')
    .setDescription(lang.pauseDescription),
  async execute(interaction, client) {
    const queue = client.distube.getQueue(interaction.guildId);

    if (!queue) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setAuthor({ 
          name: 'Alert!', 
          iconURL: musicIcons.dotIcon,
          url: "https://discord.gg/xQF9f9yUEM"
        })
        .setDescription(lang.pauseNoSongPlaying);
      return interaction.reply({ embeds: [embed] });
    }

    if (queue.paused) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setAuthor({ 
          name: 'Alert!', 
          iconURL: musicIcons.dotIcon,
          url: "https://discord.gg/xQF9f9yUEM"
        })
        .setDescription(lang.pauseAlreadyPaused);
      return interaction.reply({ embeds: [embed] });
    }

    queue.pause();

    const embed = new EmbedBuilder()
      .setColor('#FFFF00')
      .setAuthor({ 
        name: lang.pauseTitle, 
        iconURL: musicIcons.pauseresumeIcon,
        url: "https://discord.gg/xQF9f9yUEM"
      })
      .setDescription(lang.pauseDescriptionText);

    await interaction.reply({ embeds: [embed] });
  },
};
