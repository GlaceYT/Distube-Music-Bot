const { EmbedBuilder } = require('discord.js');
const db = require('../mongoDB');
const anime = require('anime-actions');

module.exports = {
  name: "blush",
  description: "Make your character blush!",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
      const sender = interaction.user;
      const blushGif = await anime.blush();

      const embed = new EmbedBuilder()
        .setColor('#ff66b2')
        .setDescription(`${sender} is blushing... 💖`)
        .setImage(blushGif);

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      const errorNotifer = require('../functions.js');
      errorNotifer(client, interaction, e, lang);
    }
  },
};
