exports.run = (client, message, args) => {
 console.log('test', client, message, args)
  message.channel.send("T'as envie de tester des trucs?");
};

exports.help = {
    name: 'test'
};
