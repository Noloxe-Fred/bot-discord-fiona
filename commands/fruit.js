const fruits = require('../fruitList')

exports.run = (client, message, args) => {

    // Récupère l'objet dont l'id est === au mois en cours

    const date = new Date();
    const month = date.getMonth();

   const fruitElements = fruits
        .find(fruit => {
            if (fruit.month === month) {
                return fruit
            }
        });

    // console.log(fruitElements.elements);

    const randomElement = fruitElements.elements[Math.floor(Math.random() * Math.floor(fruitElements.elements.length))];

    // console.log(randomElement)

    message.channel.send(`En cette saison, tu peux manger ça : ${fruitElements.emoji} **${fruitElements.name} => ${randomElement}**`);
}

exports.help = {
    name: 'legume'
};