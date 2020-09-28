// =========================== PARTIE TEST BUFFER ================================= \\
/*
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {

const baseURL = "https://restcountries.eu/rest/v2/all";

    // Je récupère les données de l'URL
    await snekfetch.get(baseURL)
        // puis, Je récupère mon tableau d'objets (r.body) sur lequel je boucle pour récupérer la prop name de chaque objets
        .then(results => {

    // ========= TESTS BUFFER =============\\

            // console.log(results.body.length) // 250 items
            const buffer = results
            console.log(buffer.raw);

    // ========= TESTS BUFFER =============\\
            

            const arrayObjects = results.body;

            const array = arrayObjects;
            const random = Math.floor(Math.random() * Math.floor(array.length));  
               
            // message.channel.send(`C'est parti pour cuisiner à **${array[random].name}** !`);

        });     
};
*/



// ================================ METHODE AVEC NODE-FETCH =========================================== \\

const fetch = require('node-fetch');


exports.run = async (client, message, args) => {

    const baseURL = "https://restcountries.eu/rest/v2/all";

    // Je récupère les données de l'URL
    fetch(baseURL)
    .then(res => {
        const buffer = res.body._transformState.writechunk;
        // console.log(buffer.toString());
        const object = buffer.toJSON();
        const data1 = object.data[0]
        console.log(data1.toString())


    })


    // .then(res => res.json())
    // .then(json => {
    //     const array = json;
    //     const random = Math.floor(Math.random() * Math.floor(array.length));  
    //     message.channel.send(`C'est parti pour cuisiner à **${array[random].translations.fr}** !`);  
    // }); 

// Explications Buffer => @Link { https://www.digitalocean.com/community/tutorials/using-buffers-in-node-js-fr }
        
    
}




// ================================ METHODE AVEC SNEKFETCH =========================================== \\

/*
// const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {

const baseURL = "https://restcountries.eu/rest/v2/all";

    // Je récupère les données de l'URL
    await snekfetch.get(baseURL)
        // puis, Je récupère mon tableau d'objets (r.body) sur lequel je boucle pour récupérer la prop name de chaque objets
        .then(r => {
            const arrayObjects = r.body;
            const array = arrayObjects;
            const random = Math.floor(Math.random() * Math.floor(array.length));  
               
            message.channel.send(`C'est parti pour cuisiner à **${array[random].name}** !`);

        });     
}
*/

/*

TODO 1 : faire mon appel API pour récupérer les pays de cette dernière 
API : https://restcountries.eu/rest/v2/all

@Link {https://discordjs.guide/additional-info/rest-api.html#making-http-requests-with-node}

*/

