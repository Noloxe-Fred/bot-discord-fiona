const Discord = require('discord');

const client = new Discord(); 

client.on('ready', () => {
    console.log('I am ready');
});

client.on('message', message => {
    if(message.author.lenght >= 300 ){
        return message.channel.send('Si vous débattez, merci d\'aller sur le #channel');
    }
})