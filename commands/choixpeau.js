exports.run = (client, message, args) => {
	const randomNumber = Math.floor(Math.random() * Math.floor(args.length));


	message.channel.send(`Résultat: **${args[randomNumber]}**`);
};

exports.help = {
	name: 'choixpeau'
};
