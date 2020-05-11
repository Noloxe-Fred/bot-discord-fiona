exports.run = (client, message, args) => {
    const randomType = legume[Math.floor(Math.random() * Math.floor(legume.length))];
    
    const randomElement = randomType.elements[Math.floor(Math.random() * Math.floor(randomType.elements.length))];

    message.channel.send(`Résultat : ${randomType.emoji} **${randomType.name} => ${randomElement}**`);
}

exports.help = {
    name: 'legume'
};

/* 
TODO#1 : Tenter de jouer sur les légumes de saison avec un date 
    Réaliser des tableaux par mois. Exemple : const legume_octobre = [...]

TODO#2 : Faire une méthode qui permettent aux users d'ajouter un produits dans mes tableaux

*/



const legume = [
    {
        name: "Légume chaud",
        emoji: ":eggplant",
        elements: [
            "Courgette",
            "Poivrons",
            "Aubergine",
            "Carottes",
            "Topinambour",
            "Brocolis",
            "Choux-fleur",
            "Navet",
            "Haricots verts",
            "Asperges"
        ]
    },
    {
        name: "Légume froid",
        emoji: ":green_salad:",
        elements: [
            "Salade verte",
            "Radis",
            "Navet",
            "Endive",
            "Asperge",
            "Carotte",
        ]
    },
    {
        name: "Legumineuse",
        emoji: ":ear_of_rice",
        elements: [
            "Riz",
            "Haricot rouge",
            "Pois cassés",
            "Lentille",
            "Boulgour",
            "Quinoa"
        ]
    }
];
