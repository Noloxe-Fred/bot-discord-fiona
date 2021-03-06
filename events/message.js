const { PREFIX } = require('../config.js');

module.exports = async (client, message) => {
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g); // split sépare la phrase, et crée une nouvelle case de tableau pour chaque espace. / +/ enlève les espaces superflus
    const command = args.shift().toLocaleLowerCase(); // ne garde que la première case du tableau, et donc ici, la commande (.fight par exemple)

    if (message.author.bot) return; // Pour contrer une boucle, où l'on demanderait au Bot de taper la commande

    // Si je veux effectuer une action sur les messages sans commandes, c'est ici

    // End

    if (message.content.indexOf(PREFIX) !== 0) return; // Permet de ne pas aller plus loin si il n'y a pas de commande: optimisation

    console.log('args=', args, ' et cmd=', command);

    // Ici on vérifie que la commande existe
    const cmd = client.commands.get(command);
    if (!cmd) return undefined;
    cmd.run(client, message, args);
};
