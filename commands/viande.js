exports.run = (client, message, args) => {    
    // D'abord un random sur le type de nourriture 
    const randomType = viande[Math.floor(Math.random() * Math.floor(viande.length))];
    
    // Et un autre random sur un élément de nourriture
    const randomElement = randomType.elements[Math.floor(Math.random() * Math.floor(randomType.elements.length))];

    message.channel.send(`Aujourd'hui, tu utiliseras : ${randomType.emoji} **${randomType.name} => ${randomElement}**`);
}

exports.help = {
    name: 'viande'
};

// Faire 3 tableaux : 1 qui regroupe les légumes, 1 pour les viandes, 1 pour les desserts

const viande = [
    {
        name: "Boeuf",
        emoji: ":ox:",
        elements: [
            "Basse-côte",
            "Entrecôte",
            "Côte",
            "Faux-filet",
            "Picanha (Aiguillette de rumsteak)",
            "Rosbif",
            "Rumsteak",
            "Bavette / Arraignée",
            "ongler / Hampe",
            "Jarret",
            "Paleron",
            "Macreuse / Jumeau",
            "Joue",
            "collier",
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
            "Poitrine",
            "Roubignolles",
        ]
    },
    {
        name: "Veau",
        emoji: ":cow2:",
        elements: [
            "Rôti (Noix, noix patissière)",
            "Côtes", 
            "Poitrine",
            "Tendron",
            "Flanchet",
            "Epaule",
            "Jarret",
            "Quasi (Rumsteak)",
            "Filet / Grenadin",
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
            "Crabe",
            "Eglefin",
            "Raie",
            "Rouget",
            "Hommard",
            "Cabillaud",
        ]
    },
];

