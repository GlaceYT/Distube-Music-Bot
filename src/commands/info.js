const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const os = require('os');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Provides information about the bot'),
  async execute(interaction) {
    const { client } = interaction;  

   
    const ping = client.ws.ping;

   
    const serverCount = client.guilds.cache.size;
    const userCount = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);

   
    const botCreationDate = client.user.createdAt.toDateString();

   
    const uptime = os.uptime();
    const uptimeFormatted = new Date(uptime * 1000).toISOString().substr(11, 8);

    
    const embed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('Bot Information')
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        { name: 'Bot Name', value: client.user.username, inline:false },
        { name: 'Ping', value: `${ping}ms`, inline:false },
        { name: 'Servers', value: `${serverCount}`, inline:false },
        { name: 'Total Users', value: `${userCount}`, inline:false },
        { name: 'Bot Creation Date', value: botCreationDate, inline:false },
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
      .setTimestamp();

  
    await interaction.reply({ embeds: [embed] });
  },
};
