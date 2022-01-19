const config = require('../config.js');
const Discord = require('discord.js');
const { channel } = require('diagnostics_channel');

const prefix = "."

module.exports = async (client, message) => {

    
    if (message.author.bot) return;
////////////////////////// XP //////////////////////////

const Level = require('../data/Level.js')

Level.findOne({
    userID: message.author.id
}, async (err, data) => {
    if (err) console.log(err);

    if (!data) {

  const data = new Level({
    userID: message.author.id,

    }) 
    data.currentLvl = 1
    data.nextLvl = 1
    data.currentXp = 1
    data.nextXp = 134
  data.save().catch(err => console.log(err))
    }

    /* currentLvl: Number,
nextLvl: Number,
currentXp: Number,
nextXp: Number */

if(!message.channel.parent || !message.channel.parent.id.includes("929688785946566686") && !message.channel.parent.id.includes("928390226315980860") && !message.channel.parent.id.includes("928390074486390915") && !message.channel.parent.id.includes("928395673974480916") && !message.channel.parent.id.includes("928395673974480916") && !message.channel.parent.id.includes("928398612193501305") && !message.channel.parent.id.includes("929683535328075796") && !message.channel.name.includes("ticket")) {
if(data.currentXp) {
    var currentXP = data.currentXp + 23
data.currentXp = currentXP
} else {
    var currentXP = 23
}
if(data.currentXp > data.nextXp) {
data.currentLvl = data.currentLvl + 1
data.nextLvl = data.nextLvl + 1
data.nextXp = data.currentXp + 249
data.currentXp = 0
}
data.save()
}

})


////////////////////////// XP //////////////////////////

if(message.content.toLowerCase() === `<@!905099558177087598>` ) message.channel.send("<:neutre:905032593647497246> | Mon prefix est **`.`**")


    if (!message.content.startsWith(prefix)) return;

    // Setting Commands
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    // Setting Arguments
    if (command.args && !args.length) {
        var reply = '<:non:932604393000411187> | Tu as donné `0 arguments`, hors la commande en a besoin.'

        if (command.usage) {
            reply += `\nLe bon usage serait : "\`${prefix}${command.name} ${command.usage}\`".`;
        }

        const embed = new Discord.MessageEmbed()
            .setColor('d10000')
            .setDescription(reply);

        return message.reply({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
    }

    // Checking DM's
    if (command.guildOnly && message.channel === 'dm') {
        const embed = new Discord.MessageEmbed()
            .setDescription('<:non:932604393000411187> | Je ne peux pas exécuter cette commande dans les `MP\'s`.')
            .setColor('d10000')

        return message.reply({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
    }

    // Setting Permissions
    if (message.guild.members.cache.get(message.author.id) !== '709051672617549826' && command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            const embed = new Discord.MessageEmbed()
                .setDescription(`<:non:932604393000411187> | Tu ne peux pas effectuer cette commande car tu ne possèdes pas la/les permission(s) requises : "\`${command.permissions}\`".`)
                .setColor('d10000')

            return message.reply({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
        }
    }

    // Setting Cooldowns
    const { cooldowns } = client;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id) && message.guild.members.cache.get(message.author.id) !== '709051672617549826') {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            const embed = new Discord.MessageEmbed()
                .setDescription(`<:laruelafausse:905111866165051432> | Attendez encore \`${timeLeft.toFixed(1)} seconde(s)\` avant d'utiliser la commande "\`${command.name}\`".`)
                .setColor('d10000')

            return message.reply({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
        }
    }

    if (message.guild.members.cache.get(message.author.id) !== '709051672617549826') {
        timestamps.set(message.author.id, now);
    }
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    // Running Commands
    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
        const embed = new Discord.MessageEmbed()
            .setDescription(`<:non:932604393000411187> | Une erreur s'est produite lors de l'exécution de la commande "\`${command.name}\`".`)
            .setColor('d10000')

        message.reply({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
    }
} 
