exports.run = (client, message, args) => {    
    // D'abord un random sur le type de nourriture 
    const randomType = viande[Math.floor(Math.random() * Math.floor(viande.length))]
    
    // Et un autre random sur un élément de nourriture
    const randomElement = randomType.elements[Math.floor(Math.random() * Math.floor(randomType.elements.length))]

    message.channel.send(`Résultat : ${randomType.emoji} **${randomType.name} => ${randomElement}**`);
}

exports.help = {
    name: 'viande'
};

// Faire 3 tableaux : 1 qui regroupe les légumes, 1 pour les viandes, 1 pour les desserts

const viande = [
    {
        name: "Boeuf",
        emoji: ":cut_of_meat:",
        elements: [
            "Entrecôte",
            "Côte",
            "Faux-filet",
            "Rosbif",
            "Bavette / Onglet",
            "Gîte / Paleron",
            "Joue",
        ]
    },
    {
        name: "Agneau",
        emoji: ":sheep:",
        elements: [
            "Epaule",
            "Gigot",
            "Collier",
            "Côtes découvertes / premières",
            "Côtes filet",
            "Souris",
            "Roubignolles"
        ]
    },
    {
        name: "Veau",
        emoji: ":beef:",
        elements: [
            "Rôti",
            "Côtes", 
            "Collier / Poitrine",
        ]
    },
    {
        name: "Poisson",
        emoji: ":fish:",
        elements: [
            "Morue",
            "Thon",
            "Saumon",
            "Sole",
            "Anchois",
            "Moule",
            "Crevette",
            "Crabe"
        ]
    },
    {
        name: "Charcuterie",
        emoji: ":bacon:",
        elements: [
            "Saucisson",
            "Pâté",
            "Jambon Madrange",
            "Bacon",
            "Pancetta",
            "Saucisse",
        ]
    },
];

