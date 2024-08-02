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
    .setName('loop')
    .setDescription(lang.loopDescription)
    .addIntegerOption(option => option.setName('mode').setDescription('Loop mode: 0 (off), 1 (song), 2 (queue)').setRequired(true)),
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
        .setDescription(lang.loopNoSong);
      return interaction.reply({ embeds: [embed] });
    }

    const mode = interaction.options.getInteger('mode');
    if (![0, 1, 2].includes(mode)) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setAuthor({ 
          name: 'Alert!', 
          iconURL: musicIcons.dotIcon,
          url: "https://discord.gg/xQF9f9yUEM"
        })
        .setDescription(lang.loopInvalidMode);
      return interaction.reply({ embeds: [embed] });
    }

    queue.setRepeatMode(mode);
    const modeText = mode === 0 ? lang.loopModeDisabled : mode === 1 ? lang.loopSongEnabled : lang.loopQueueEnabled;
    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setAuthor({ 
        name: lang.loopTitle, 
        iconURL: musicIcons.loopIcon,
        url: "https://discord.gg/xQF9f9yUEM"
      })
      .setDescription(modeText);

    await interaction.reply({ embeds: [embed] });
  },
};
