const fs = require('fs');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: {
        name: 'displaylist',
        execute: async (interaction) => {
            const listName = interaction.values[0];
            const embed = new MessageEmbed()
                .setDescription(listName);

            fs.readFile(__dirname + '/../../datas/lists.json', 'utf8', async (err, data) => {
                if (err){
                    console.log(err);
                } else {
                    obj = JSON.parse(data);
                    const selectedList = obj.find((list) => list.name === listName);
                    console.log(selectedList)
                    selectedList.list.map((item) => embed.addField(item, '-'));
                    interaction.reply({ embeds: [ embed ] })
                }});
        }
    }
}