const vegetables = require('../legumeList')

exports.run = (client, message, args) => {

    // Récupère l'objet dont l'id est === au mois en cours

    const date = new Date();
    const month = date.getMonth();

   const vegetableElements = vegetables
        .find(vegetable => {
            if (vegetable.month === month) {
                return vegetable
            }
        });

    // console.log(vegetableElements.elements);

    const randomElement = vegetableElements.elements[Math.floor(Math.random() * Math.floor(vegetableElements.elements.length))];

    // console.log(randomElement)

    message.channel.send(`En cette saison, tu peux manger ça : ${vegetableElements.emoji} **${vegetableElements.name} => ${randomElement}**`);
}

exports.help = {
    name: 'legume'
};

/*
TODO#1 : Tenter de jouer sur les légumes de saison avec un date
    Réaliser des tableaux par mois. Exemple : const legume_octobre = [...] : READY

TODO#2 : Faire une méthode qui permettent aux users d'ajouter un produits dans mes tableaux

*/


