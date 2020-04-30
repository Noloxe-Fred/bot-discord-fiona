exports.run = (client, message, args) => {

	if (message.author.id === '227353987991601152') {
		return message.channel.send('Non, tu ne mérites pas cette commande toi!')
	}
	const choices = args.join(' ').split(',');
	const randomNumber = Math.floor(Math.random() * Math.floor(choices.length));


	message.channel.send(`Résultat: **${choices[randomNumber]}**`);
};

exports.help = {
	name: 'choixpeau'
};
