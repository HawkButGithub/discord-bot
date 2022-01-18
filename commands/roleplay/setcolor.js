const Discord = require('discord.js');
const Profil = require('../../data/Profil.js');

module.exports = {
    name: 'setcolor',
    description: 'Modifie la couleur de ton profil.',
    usage: '<couleur HEXA/couleur normale (ex: rouge)>',
    guildOnly: true,
    cooldown: 5,
    args: true,
    aliases: ['sc'],
    execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id);

const colorList = ["Rouge", "Jaune", "Bleu", "Vert", "Violet", "Rose", "Marron", "Orange", "Invisible", "Noir", "Blanc"]
                        let foundInText = false;
    for (var i in colorList) {
      if (message.content.toLowerCase().includes(colorList[i].toLowerCase())) 
      foundInText = true;
    }
          if ((args.length > 6 && args.length < 6) || !foundInText ) {
            const embed = new Discord.MessageEmbed()
                .setColor('d10000')
                .setDescription('<:non:932604393000411187> | Tu dois insérer un code HEXA valide ou alors un mot parmis cette liste: (`Rouge/Jaune/Bleu/Vert/Violet/Rose/Marron/Orange/Noir/Blanc & Invisible`');

            return message.channel.send({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
        }

        Profil.findOne({
            userID: user.user.id
        }, async (err, data) => {
            if (err) console.log(err);

            if (!data.pupille && !data.nomrp && !data .village&& !data.kekkei && !data.age && !data.bijuu && !data.arme && !data.clan && !data.chakra ) {
                const embed = new Discord.MessageEmbed()
                    .setColor('d10000')
                    .setDescription('<:non:932604393000411187> | Tu n\'as pas encore de personnage.');

                return message.channel.send({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
            }
         const colorI = args[0]
               .replace("Rouge", '#ce1414')
               .replace("Jaune", '#f1d70c')
               .replace("Bleu", '#0c77f1')
               .replace("Vert", '#2ae612')
               .replace("Violet", '#7f12e6')
               .replace("Rose", '#ff36fe')
               .replace("Orange", '#ee6506')
               .replace("Marron", '#411e0b')
               .replace("Noir", '#080808')
               .replace("Blanc", '#fcfaf9')
               .replace("Invisible", '#36393F')
               .replace("rouge", '#ce1414')
               .replace("jaune", '#f1d70c')
               .replace("bleu", '#0c77f1')
               .replace("vert", '#2ae612')
               .replace("violet", '#7f12e6')
               .replace("rose", '#ff36fe')
               .replace("orange", '#ee6506')
               .replace("marron", '#411e0b')
               .replace("noir", '#080808')
               .replace("blanc", '#fcfaf9')
               .replace("invisible", '#36393F')

            data.color = colorI;
            data.save().catch(err => console.log(err));

            const embed = new Discord.MessageEmbed()
                .setDescription(`<:laruelavrai:905111814822563880> | Votre couleur d'embed a correctement été changée en : ${args[0]}`)
                .setColor('14b321');

            message.channel.send({ embeds: [embed] });
        });

    },
};