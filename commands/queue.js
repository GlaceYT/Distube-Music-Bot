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
    .setName('queue')
    .setDescription(lang.queueDescription),

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
        .setDescription(lang.queueNoSongPlaying);
      return interaction.reply({ embeds: [embed] });
    }

    const songs = queue.songs;
    const chunkSize = 10;
    const embedMessages = [];
    const totalChunks = Math.ceil(songs.length / chunkSize);

    
    await interaction.deferReply();

    for (let i = 0; i < totalChunks; i++) {
      const chunk = songs.slice(i * chunkSize, (i + 1) * chunkSize);
      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setAuthor({ 
          name: lang.queueTitle, 
          iconURL: musicIcons.beatsIcon,
          url: "https://discord.gg/xQF9f9yUEM"
        })
        .setDescription(chunk.map((song, index) => `${i * chunkSize + index + 1}. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join('\n'))
        .setFooter({ text: lang.queueFooterText.replace('{duration}', queue.formattedDuration) });

      embedMessages.push(embed);
    }

   
    for (const embed of embedMessages) {
      await interaction.followUp({ embeds: [embed] });
    }
  },
};
