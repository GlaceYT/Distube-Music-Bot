const db = require("../mongoDB");
module.exports = {
  name: "previous",
  description: "Plays the previous track.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: `⚠️ No music playing!!`, ephemeral: true }).catch(e => { })
      try {
        let song = await queue.previous()
        interaction.reply({ content: `**Behold, the enchanting melody of the past!!**` }).catch(e => { })
      } catch (e) {
        return interaction.reply({ content: `❌ No previous track!!`, ephemeral: true }).catch(e => { })
      }
    } catch (e) {
    console.error(e); 
  }
  },
};
