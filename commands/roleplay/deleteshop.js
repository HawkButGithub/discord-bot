const fs = require("fs");
const Discord = require('discord.js')
const Profil = require('../../data/Profil.js')
const Shop = require('../../data/Shop.js')

module.exports = {
  name: "deleteshop",
    description: 'Supprime un objet dans le shop!',
    usage: '<ID>',
    guildOnly: true,
    cooldown: 5,
    args: true,
   aliases: ["deleteitem", "itemremove"],
    async execute(client, message, args) {

const id = args[0];


        Shop.deleteOne({
            ObjetID: id
        }, (err, data) => {
        message.channel.send("Objet Supprimé !")
        })
    }}