const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const { MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('displaylist')
        .setDescription('Afficher une liste'),
    async execute(interaction) {
        fs.readFile(__dirname + '/../../datas/lists.json', 'utf8', async (err, data) => {
            if (err){
                console.log(err);
            } else {
                obj = JSON.parse(data);
                const listsName = obj.map((list) => list.name);

                const row = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId('displaylist')
                            .setPlaceholder('Choix')
                            .addOptions(listsName.map((name) => ({
                                label: name,
                                value: name,
                            }))),
                    );

                await interaction.reply({ content: 'Nom de la liste:', components: [row] });
            }});
    },
};