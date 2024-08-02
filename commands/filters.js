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
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');
const { filters: lang } = require('../loadlanguage.js'); 
const musicIcons = require('../UI/icons/musicicons.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('filters')
    .setDescription(lang.description),
  async execute(interaction, client) {
    const queue = client.distube.getQueue(interaction.guildId);

    if (!queue) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle(lang.errorTitle)
        .setDescription(lang.noSongPlaying);
      return interaction.reply({ embeds: [embed] });
    }

    const filters = ['3d', 'bassboost', 'echo', 'karaoke', 'nightcore', 'vaporwave', 'flanger', 'gate', 'haas', 'reverse'];

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle(lang.availableFiltersTitle)
      .setDescription(lang.clickButtonToApply);

    const row1 = new ActionRowBuilder()
      .addComponents(
        filters.slice(0, 5).map(filter => new ButtonBuilder()
          .setCustomId(filter)
          .setLabel(filter.charAt(0).toUpperCase() + filter.slice(1))
          .setStyle(ButtonStyle.Primary))
      );

    const row2 = new ActionRowBuilder()
      .addComponents(
        filters.slice(5).map(filter => new ButtonBuilder()
          .setCustomId(filter)
          .setLabel(filter.charAt(0).toUpperCase() + filter.slice(1))
          .setStyle(ButtonStyle.Primary))
      );

    const clearRow = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('clear_filters')
          .setLabel(lang.clearFiltersLabel)
          .setStyle(ButtonStyle.Danger)
      );

    await interaction.reply({ embeds: [embed], components: [row1, row2, clearRow] });

    const collector = interaction.channel.createMessageComponentCollector({ componentType: ComponentType.Button, time: 60000 });

    collector.on('collect', async i => {
      if (i.user.id !== interaction.user.id) {
        return i.reply({ content: lang.notYourButton, ephemeral: true });
      }

      const selectedFilter = i.customId;

      if (selectedFilter === 'clear_filters') {
        queue.filters.clear(); 
        embed.setDescription(lang.filtersCleared);
      } else {
        if (queue.filters.has(selectedFilter)) {
          queue.filters.remove(selectedFilter);
        } else {
          queue.filters.add(selectedFilter);
        }
        embed.setDescription(`${lang.appliedFilter}: ${selectedFilter}`);
      }

      await i.update({ embeds: [embed], components: [row1, row2, clearRow] });
    });

    collector.on('end', collected => {
      embed.setDescription(lang.timeout);
      interaction.editReply({ embeds: [embed], components: [] });
    });
  },
};
