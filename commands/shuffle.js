const { EmbedBuilder } = require("discord.js")
const config = require("../config.js");
const db = require("../mongoDB");
module.exports = {
  name: "shuffle",
  description: "Shuffle the queue songs",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    try {

        const queue = client.player.getQueue(interaction.guild.id);
        if (!queue || !queue.playing) return interaction.reply({ content: `⚠️ No music playing!!`, ephemeral: true }).catch(e => { })
        try {
          queue.shuffle(interaction)
        return interaction.reply({ content: `<@${interaction.user.id}>, Shuffled the songs for You!!` }).catch(e => { })
        } catch(err) {
        return interaction.reply({ content: `**${err}**` }).catch(e => { })
        }
      } catch (e) {
      console.error(e);
    }
  },
};
