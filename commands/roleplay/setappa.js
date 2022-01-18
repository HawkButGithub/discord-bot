const Discord = require('discord.js');
const Profil = require('../../data/Profil.js');

module.exports = {
    name: 'setapparence',
    description: 'Modifie l\'image de ton profil.',
    usage: '<lien (.gif/.png/.jpg/.jpeg)>',
    guildOnly: true,
    cooldown: 5,
    args: true,
    aliases: ['sa'],
    execute(client, message, args) {
/*
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id);

        const url = args[0];
        
        if (!url.match(/\.(jpeg|jpg|gif|png)$/)) {
            const embed = new Discord.MessageEmbed()
                .setColor('d10000')
                .setDescription('<:laruelafausse:905111866165051432> | Tu dois insérer un lien d\'image valide.');

            return message.channel.send({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
        }

        Profil.findOne({
            userID: user.user.id
        }, async (err, data) => {
            if (err) console.log(err);
            if (!data.pupille && !data.nomrp && !data .village&& !data.kekkei && !data.age && !data.bijuu && !data.arme && !data.clan && !data.chakra ) {
                const embed = new Discord.MessageEmbed()
                    .setColor('d10000')
                    .setDescription('<:laruelafausse:905111866165051432> | Tu n\'as pas encore de personnage.');

                return message.channel.send({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
            }

            data.apparence = args[0];
            data.save().catch(err => console.log(err));

            const embed = new Discord.MessageEmbed()
                .setDescription(`<:laruelavrai:905111814822563880> | Votre apparence a correctement été changée en : ${args[0]}`)
                .setColor('14b321');

            message.channel.send({ embeds: [embed] });
        });
  */  },
};