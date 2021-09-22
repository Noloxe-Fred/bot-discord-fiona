const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const { MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('additem')
        .setDescription('Ajouter une entrée à une liste')
        .addStringOption(option => option.setName('valeur').setDescription('Entrer la valeur à ajouter à la liste').setRequired(true)),
    async execute(interaction) {
        const value = interaction.options.getString('valeur');

        fs.readFile(__dirname + '/../../datas/lists.json', 'utf8', async (err, data) => {
            if (err){
                console.log(err);
            } else {
                obj = JSON.parse(data);
                const listsName = obj.lists.map((list) => list.name);

                const row = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId('additem')
                            .setPlaceholder('Choix')
                            .addOptions(listsName.map((name) => ({
                                label: name,
                                value: JSON.stringify({ listName: name, value }),
                            }))),
                    );

                await interaction.reply({ content: 'Nom de la liste:', components: [row] });
            }});
    },
};