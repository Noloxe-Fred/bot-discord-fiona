// const list = require('../randomlist');

const elements = [
    "concombre",
    "citrouille",
    "steak",
    "la bite à Antho"
]

console.log(elements[0])


exports.run = (client, message, args) => {  

    // D'abord un random sur le type de nourriture 
    const randomElement = elements[Math.floor(Math.random() * Math.floor(elements.length))]
    
    // Et un autre random sur un élément de nourriture

    message.channel.send(randomElement);
}

exports.help = {
	name: 'random'
};

