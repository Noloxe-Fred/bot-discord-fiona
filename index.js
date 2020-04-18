const { Client, Collection } = require('discord.js'); // pour n'importer que Client, et non toute la bibliothèque Discord.js, app plus légère
const { TOKEN } = require('./config.js');
const client = new Client(); // et donc plus new Discord.Client(). On peut passer des options à client de cette manière: new Client ({ options }) (voir doc)
const fs = require('fs');

client.commands = new Collection();
fs.readdir('./commands/', (err, files) => {
    if (err) return console.error;

    files.forEach(file => {
        if (!file.endsWith('.js')) return undefined;

        const props = require(`./commands/${file}`);
        const cmdName = file.split('.')[0];

        client.commands.set(cmdName, props);
    });
});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;

    files.forEach(file => {
        if (!file.endsWith('.js')) return undefined;

        const event = require(`./events/${file}`);
        const evtName = file.split('.')[0];

        client.on(evtName, event.bind(null, client)); // message   client.on('mesage', client, message)
    });
});

client.login(TOKEN); //Token (Série de chiffre) propre a chaque Bot
client.on("ready", () => {console.log('Bot démarré')});
