const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {

const baseURL = "https://restcountries.eu/rest/v2/all";
const array1 = []

    // Je récupère les données de l'URL
    await snekfetch.get(baseURL)
        // puis, Je récupère mon tableau d'objets (r.body) sur lequel je boucle pour récupérer la prop name de chaque objets
        .then(r => {
            const arrayObjects = r.body;
            const array = arrayObjects.map(el => el.name);
            const random = Math.floor(Math.random() * Math.floor(array.length));  
               
            message.channel.send(`C'est parti pour cuisiner à **${array[random]}** !`);

        });

       
}

// TODO 1 : faire mon appel API pour récupérer les pays de cette dernière 
// API : https://restcountries.eu/rest/v2/all

// @Link {https://discordjs.guide/additional-info/rest-api.html#making-http-requests-with-node}