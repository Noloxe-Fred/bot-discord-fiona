exports.run = (client, message, args) => {
	message.author.send('Adresse du serveur Minecraft: <>|| Mdp: <>');
	client.channels.fetch('701109286046007376')
		.then(channel => channel.send((`${message.author.username} a utilisé la commande !minecraft`)));
};

exports.help = {
	name: 'minecraft'
};
