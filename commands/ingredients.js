const { MessageEmbed } = require('discord.js');
const ingredients = require('../listKitchen');

exports.run = (client, message, args) => {
    const embed = new MessageEmbed();
    embed
        .setTitle('Liste des ingrédients :')
    ingredients.forEach(ingredient => {
        embed
            .addFields(
                { name: ingredient.emoji + " " + ingredient.type + " :", value: ingredient.element },
            )
    });

    message.channel.send(embed)
};

exports.help = {
    name: 'ingredients'
}; 