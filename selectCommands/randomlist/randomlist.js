const fs = require('fs');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: {
        name: 'randomlist',
        execute: async (interaction) => {
            const listName = interaction.values[0];
            const embed = new MessageEmbed()
                .setTitle('Et vous allez regarder:');

            fs.readFile(__dirname + '/../../datas/lists.json', 'utf8', async (err, data) => {
                if (err){
                    console.log(err);
                } else {
                    obj = JSON.parse(data);
                    const selectedList = obj.find((list) => list.name === listName);
                    const randomNumber = Math.floor(Math.random() * (selectedList.list.length));
                    embed.setDescription(selectedList.list[randomNumber]);
                    interaction.reply({ embeds: [ embed ] })
                }});
        }
    }
}