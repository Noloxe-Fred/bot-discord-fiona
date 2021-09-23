const fs = require('fs');

module.exports = {
    data: {
        name: 'additem',
        execute: async (interaction) => {
            const { listName, value } = JSON.parse(interaction.values[0]);

            fs.readFile(__dirname + '/../../datas/lists.json', 'utf8', async (err, data) => {
                if (err){
                    console.log(err);
                } else {
                    obj = JSON.parse(data);

                    const newLists = obj.map((l) => {
                        if (l.name === listName) {
                            l.list.push(value)
                        }
                        return l;
                    });
                    json = JSON.stringify(newLists);
                    fs.writeFile(__dirname + '/../../datas/lists.json', json, 'utf8', () => {
                        return interaction.reply(`Liste créée: ${listName}`);
                    });
                }});
            interaction.reply('Ajout ok!')
        }
    }
}
