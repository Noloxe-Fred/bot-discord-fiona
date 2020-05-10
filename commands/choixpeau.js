exports.run = (client, message, args) => {

	if (message.author.id === '227353987991601152') {
		return message.channel.send('Arrête d\'essayer, je t\'ai dit que tu n\'y avais pas droit!')
	}
	const choices = args.join(' ').split(',');
	const randomNumber = Math.floor(Math.random() * Math.floor(choices.length));


	message.channel.send(`Résultat: **${choices[randomNumber]}**`);
};

exports.help = {
	name: 'choixpeau'
};
