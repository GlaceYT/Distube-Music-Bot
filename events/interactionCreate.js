const loadLanguage = require('../loadlanguage.js');

module.exports = async (client, interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    const lang = loadLanguage; 
    await command.execute(interaction, client, lang);
  } catch (error) {
    console.error(error);
    const lang = loadLanguage; 
    await interaction.reply({ content: lang.errorMessage || 'There was an error while executing this command!', ephemeral: true });
  }
};
