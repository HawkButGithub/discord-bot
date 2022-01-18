const Discord = require('discord.js');
const Profil = require('../../data/Profil.js');
const { MessageActionRow, MessageSelectMenu} = require('discord.js');
const { REPL_MODE_SLOPPY } = require('repl');
const Shop = require('../../data/Shop.js');


module.exports = {
    name: 'shop',
    description: 'Shop',
    guildOnly: true,
    cooldown: 5,
    aliases: ['boutique'],
    async execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
        .setAuthor("SHOP","https://th.bing.com/th/id/R.520d34bcf694ac66a14c7252af16c2dd?rik=9%2bhE0yWfdmJOCA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fshop-icon.png&ehk=ZWgtx3VBsxiNBdKVrPHDrs5RsMtuQPuBwCPlIbVV1ss%3d&risl=&pid=ImgRaw&r=0")
        .setColor("2f3136")
               .setFooter("Pour acheter un objet, utilisez .buy <ID>.")
        .addField("``` \n```", "** **")
        let data;
        try {
        data = await Shop.findOne({ }) 
        if(!data) return console.log("nop")
    } catch (err) {
        console.log(err)
    }

await Shop.find({}).then(p => {
p.sort((a, b) => (a.ObjetPrix > b.ObjetPrix)  ? 1 : -1 ).splice(0, 10)
.forEach(e => {
    embed.addField(`> **${e.ObjetNom}** - \`${e.ObjetPrix}\` <:Yen:929350482974085131>`, `\`${e.ObjetDescription}\`\nID: **\`${e.ObjetID}\`**`)
})
})

message.reply({embeds: [embed]})


    }}