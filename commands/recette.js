/* 
Explications de la commande !recette : 

- Creation d'une commande qui permette de générer au hasard le nom d'une recette de cuisine 
- Permettre aux utilisateurs du serveur discord d'ajouter des noms aussi 
- Seul certains utilisateurs pourront utiliser cette commande. 
*/

const recipes = require('../recipes-list');
const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {

    // Je récupère une recette au hasard
    const randomRecipes = recipes[Math.floor(Math.random() * Math.floor(recipes.length))];

    const embed = new MessageEmbed();
    embed
        .setThumbnail("https://cdn.pixabay.com/photo/2017/06/13/22/31/logo-2400338_960_720.png") // ===> Ajoute une petit image / logo
        .setTitle(`Recettes au hasard : `)
        .setDescription('Commande qui te permet d`avoir une recette au hasard. Mais tu peux en rajouter si tu le souhaite aussi.')
        .addFields(
            { name: randomRecipes.name, value: randomRecipes.ingredients }
        )
        .setImage(randomRecipes.imageURL)

        message.channel.send(embed)

        console.log(recipes)
};

exports.help = {
    name: 'recette'
};