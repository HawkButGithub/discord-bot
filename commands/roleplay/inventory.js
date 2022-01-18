const fs = require("fs");
const Discord = require('discord.js')
const Profil = require('../../data/Profil.js')
const Shop = require('../../data/Shop.js')

module.exports = {
  name: "inventory",
    description: 'Voir son inventaire !',
    usage: '',
    guildOnly: true,
    cooldown: 5,
        aliases: ["inventaire", "inv"],
    async execute(client, message, args) {

const embed = new Discord.MessageEmbed()
.setAuthor('INVENTAIRE', "https://media.discordapp.net/attachments/929376720484720671/929482499812392990/kisspng-backpack-computer-icons-bag-travel-schoolbag-5adfdf4c196065.327459781524621132104.png?width=473&height=473")
.setDescription("** **")
.setColor("2f3136")


var inventaire;

        const data = Shop.find({
            ObjetOwner: message.author.id
        }, async function (err) {

                if (data) {
                    console.log(data);
                    const lol = await Shop.find({
                        ObjetOwner: message.author.id
                    })
                    const userIDs = lol.map(user => `${user.ObjetOwner}`)
                    const mentions = userIDs.map(objet => `${objet}`).join('\n')
                    console.log(mentions);
                    embed.addField(`${mentions}`, "** **");

                } else {
                    embed.addField("**Vous ne possèdez aucun Objet**", "*Vous pouvez en acheter dans le `.shop`*");
                }
                message.reply({ embeds: [embed] });

            })

    }}