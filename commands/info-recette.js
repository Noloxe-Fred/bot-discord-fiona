const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {

    const embed = new MessageEmbed();
    embed
        .setTitle(`Explications du bot`)
        .setDescription('Un petit bot qui pourra rassembler toutes nos recettes de cuisine.')
        .addFields(
            {name: "**=> !recette**", value: "Retourne une recette au hasard"},
            {name: "**=> !ajout-recette**", value: "Te permet d'ajouter une recette de ton choix : il te suffit de respecter cet ordre : Nom de la recette, url de votre photo, la categorie (viande, végétarien, vegan), liste des ingrédients"}
            )

        message.channel.send(embed);

};

exports.help = {
    name: 'info-recette'
};