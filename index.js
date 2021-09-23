const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
client.selectCommands = new Collection();
const commandDirs = fs.readdirSync('./commands');
const selectCommandDirs = fs.readdirSync('./selectCommands');

for (const dir of commandDirs) {
    const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${dir}/${file}`);
        client.commands.set(command.data.name, command);
    }
}

for (const dir of selectCommandDirs) {
    const selectCommandFiles = fs.readdirSync(`./selectCommands/${dir}`).filter(file => file.endsWith('.js'));
    for (const file of selectCommandFiles) {
        const command = require(`./selectCommands/${dir}/${file}`);
        client.selectCommands.set(command.data.name, command);
    }
}

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;

    files.forEach(file => {
        if (!file.endsWith('.js')) return undefined;

        const event = require(`./events/${file}`);
        const evtName = file.split('.')[0];

        client.on(evtName, event.bind(null, client));
    });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;
    const command = client.selectCommands.get(interaction.customId);

    if (!command) return;

    try {
        await command.data.execute(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: 'There was an error while executing this select command!', ephemeral: true });
    }
});

client.login(token);
client.on("ready", () => {console.log('Bot démarré')});
