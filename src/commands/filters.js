const { SlashCommandBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('filters')
        .setDescription('Choose music filters with buttons'),

    async execute(interaction) {
        const filters = {
            bassboost: 'bassboost',
            '3d': '3d',
            vaporwave: 'vaporwave',
            nightcore: 'nightcore'
        };

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Select a Filter')
            .setDescription('Choose a filter from the buttons below or click "Clear Filters" to remove all filters.');
            

        const filterButtons = Object.keys(filters).map(filter => {
            return new ButtonBuilder()
                .setCustomId(`filter_${filter}`)
                .setLabel(filter)
                .setStyle(ButtonStyle.Primary);
        });

        const clearButton = new ButtonBuilder()
            .setCustomId('filter_clear')
            .setLabel('Clear Filters')
            .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder().addComponents([...filterButtons, clearButton]);

        await interaction.reply({ embeds: [embed], components: [row] });

        const collector = interaction.channel.createMessageComponentCollector({ time: 60000 });

        collector.on('collect', async i => {
            if (!i.isButton()) return;

            const queue = interaction.client.playerManager.distube.getQueue(interaction.guildId);

            if (!queue) {
                try {
                    await i.update({
                        content: 'There is no music playing!',
                        components: []
                    });
                } catch (error) {
                    if (error.code !== 10062 && error.code !== 10008) console.error('Failed to update interaction:', error);
                }
                return;
            }

            const selectedFilter = i.customId.split('_')[1];
            const activeFilters = queue.filters.names;
            const filter = filters[selectedFilter];

            try {
                let newDescription;

                if (selectedFilter === 'clear') {
                    queue.filters.clear();
                    newDescription = 'All filters have been cleared!';
                } else {
                    if (activeFilters.length > 0 && !activeFilters.includes(filter)) {
                        newDescription = `Please clear the current filter first by clicking "Clear Filters" before applying the **${filter}** filter.`;
                    } else if (activeFilters.includes(filter)) {
                        queue.filters.remove(filter);
                        newDescription = `The **${filter}** filter has been removed!`;
                    } else {
                        queue.filters.add(filter);
                        newDescription = `The **${filter}** filter has been applied!`;
                    }
                }

                const updatedEmbed = EmbedBuilder.from(embed)
                   
                    .setDescription(newDescription);

                await i.update({
                    embeds: [updatedEmbed],
                    components: [row]
                });

            } catch (error) {
                if (error.code !== 10062 && error.code !== 10008) {
                    console.error('Failed to handle interaction:', error);
                }
            }
        });

        collector.on('end', async () => {
            row.components.forEach(button => button.setDisabled(true));

            try {
                await interaction.editReply({
                    components: [row]
                });
            } catch (error) {
                if (error.code !== 10008) console.error('Failed to edit interaction reply:', error);
            }
        });
    },
};
