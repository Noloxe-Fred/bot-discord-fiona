exports.run = (client, message, args) => {
	if (message.author.id === '227353987991601152') {
		return message.channel.send('Non, tu ne mérites pas cette commande');
	}
	
	const randomNumber = Math.floor(Math.random() * Math.floor(args.length));

	message.channel.send(`Résultat: **${args[randomNumber]}**`);
};

exports.help = {
	name: 'choixpeau'
};
