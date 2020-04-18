const { MessageEmbed } = require('discord.js');
const games = require('../gamesList');

exports.run = (client, message, args) => {
    const embed = new MessageEmbed();
    embed
        .setTitle('Liste des jeux')
        .setDescription('Cliquez sur la réaction sous le message pour ajouter le jeu à vos rôles (enlevez une réaction vous enlevera le rôle)');
    games.forEach(game => {
        embed
            .addFields(
                {name: game.name, value: message.guild.emojis.cache.find(emoji => emoji.name === 'game.name'), inline: true}
            )
    });

    message.channel.send(embed)
        .then(async message => {
            games.forEach(game => {
                message.react(game.emojiId);
            });
            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.id !== message.id) return;
                const member = await reaction.message.guild.members.fetch(user.id);
                const roleToAdd = message.guild.roles.cache.find(role => role.name === reaction.emoji.name);
                if (!member.user.bot) {
                    await member.roles.add(roleToAdd);
                }
            });
            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.id !== message.id) return;
                const member = await reaction.message.guild.members.fetch(user.id);
                const roleToRemove = message.guild.roles.cache.find(role => role.name === reaction.emoji.name);
                if (!member.user.bot) {
                    member.roles.remove(roleToRemove);
                }
            });
        })

};

exports.help = {
    name: 'list'
};
