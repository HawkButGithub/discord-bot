const Discord = require('discord.js');

module.exports = async (client, message) => {
    if (message.author.bot) return;
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.id,
        member: message.member,
        id: message.author.id,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    });
}

