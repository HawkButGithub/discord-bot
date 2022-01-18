const Discord = require('discord.js');
const Profil = require('../../data/Profil.js');

module.exports = {
    name: 'setnomrp',
    description: 'Modifie ton nom roleplay.',
    usage: '<nom roleplay>',
    guildOnly: true,
    cooldown: 5,
    args: true,
    aliases: ['sn'],
    execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id);

        const arguments = args.join(' ');
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

            data.nomrp = arguments;
            data.save().catch(err => console.log(err));

            const embed = new Discord.MessageEmbed()
                .setDescription(`<:laruelavrai:905111814822563880> | Votre nom roleplay a correctement été changé en : ${arguments}`)
                .setColor('14b321');

            message.channel.send({ embeds: [embed] });
        });
  },
};