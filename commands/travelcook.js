const fetch = require('node-fetch');

exports.run = (client, message, args) => {

// TODO 1 : faire mon appel API pour récupérer les pays de cette dernière 
// API : https://restcountries.eu/rest/v2/all

// @Link {https://discordjs.guide/additional-info/rest-api.html#making-http-requests-with-node}

const baseURL = "https://restcountries.eu/rest/v2/all";

// L'URL regroupe un tableau d'objets
// Dans ces objet, on veut récupérer la propriété "name"

// Pour cela, je dois déjà boucler sur le tableau 
for(object in baseURL){
    console.log(object.lenght)
}

const truc = fetch(baseURL).then(response => response.json())

console.log(truc)
};

