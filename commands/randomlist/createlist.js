const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('createlist')
        .setDescription('Créer une liste')
        .addStringOption(option => option.setName('nom').setDescription('Entrer le nom de la liste')),
    async execute(interaction) {
        const listName = interaction.options.getString('nom');
        fs.readFile(__dirname + '/../../datas/lists.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                obj = JSON.parse(data);
                if (obj.lists.find((list) => list.name === listName)) {
                    return interaction.reply(`Cette liste existe déjà`);
                }
                obj.lists.push({ name: listName, list: [] }); //add some data
                json = JSON.stringify(obj);
                fs.writeFile(__dirname + '/../../datas/lists.json', json, 'utf8', () => {
                    return interaction.reply(`Liste créée: ${listName}`);
                });
            }});
    },
};