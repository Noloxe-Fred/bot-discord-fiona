exports.run = (client, message, args) => {    
    const randomType = dessert[Math.floor(Math.random() * Math.floor(dessert.length))];
    
    const randomElement = randomType.elements[Math.floor(Math.random() * Math.floor(randomType.elements.length))];

    message.channel.send(`Résultat : ${randomType.emoji} **${randomType.name} => ${randomElement}**`);
}

exports.help = {
    name: 'dessert'
};

const dessert = [
    {
        name: "Fruit",
        emoji: ":peach",
        elements: [
            "Fraise",
            "Cerise",
            "Kiwi",
            "Banane",
            "Ananas",
            "Mangoustant",
            "Orange",
            "Pomme",
            "Poire",
            "Rhubarbe",
            "Mangue"
        ]
    },
    {
        name: "Gourmandise",
        emoji: ":doughnut:",
        elements: [
            "Chocolat noir",
            "Chocolat Lait",
            "Chocolat blanc",
            "M'n'Ms",
            "Smarties",
            "Kinder",
            "Twix",
            "Lion",
            "Daim",
        ]
    },
    {
        name: "Noix",
        emoji: ":peanuts:",
        elements : [
            "Cacahouettes",
            "Noisettes",
            "Amandes",
            "Noix",
            "Noix du Brésil",
            "Noix de Pécan"
        ]
    }
]
