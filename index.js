console.clear();

// Modules
const fs = require('fs');

const Discord = require('discord.js');

const { MessageActionRow, MessageSelectMenu } = require('discord.js');


const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents: intents, restTimeOffset: 0 });


const config = require('./config.js');



// Snipes
client.snipes = new Map();

// Cooldowns
client.cooldowns = new Discord.Collection();

// Command Handler
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

// Event Handler
fs.readdir("./events/", (error, f) => {
    if (error) console.error(error);

    f.forEach(f => {
        const events = require(`./events/${f}`)
        const event = f.split('.')[0]

        client.on(event, events.bind(null, client));
    });
});

// Lancer le bot
client.login("OTI4MzcyMjY4NjQ2Njc4NjA4.YdX0DQ.nGiyturhwigQ-o9mVioh9YiX3Ww");