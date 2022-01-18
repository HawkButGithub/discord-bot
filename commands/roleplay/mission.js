const fs = require("fs");
const Discord = require('discord.js')
const Profil = require('../../data/Profil.js')

module.exports = {
  name: "mission",
    description: 'Choisir une mission !',
    usage: ' ',
    guildOnly: true,
    cooldown: 5,
        aliases: ["quest", "quête"],
    async execute(client, message, args) {

 //if((!message.member.roles.cache.has("928389697095467008")) &&  (!message.member.roles.cache.has("928389697095467008")) && (!message.member.roles.cache.has("911649480246456351")) && (!message.member.roles.cache.has("911649481538281482")) && (!message.member.roles.cache.has("911649482440060978")) && (!message.member.roles.cache.has("911649482842722305"))) return message.channel.send(`${message.author} Vous ne pouvez pas faire de mission car vous ne possedez pas de fiche ou de grade compatible.`)
// .then(msg => setTimeout(() => msg.delete(), 10000)); 

console.log("oo")

var rangE = " "
var rangD = " "
var rangC = " "
var rangB = " "
var rangA = " "
var rangS = " "
var rangSS = " "
var Sannin = " "

if(message.member.roles.cache.has("911649473808179250")) {
 rangE = "**🇪 : Mission de rang E**";
 rangD = "**🇩 : Mission de rang D**";
 rangC = "**🇨 : Mission de rang C**";
 rangB = "**🇧 : Mission de rang B**";
 rangA = "**🇦 : Mission de rang A**";
 rangS = "**🇸 : Mission de rang S**";
 rangSS = "**🌟 : Mission de rang SS+**";
 grade = "Sannin"
} else if(!grade) {
 rangE = "**🇪 : Mission de rang E**";
 rangD = "**🇩 : Mission de rang D**";
 rangC = "**🇨 : Mission de rang C**";

 grade = "Genin"
}


const embed = new Discord.MessageEmbed()
.setTitle('Menu des missions')
.setDescription(`> Vous êtes du grade ${grade}, vous pouvez donc choisir parmis: \n\n${rangE}\n${rangD}\n${rangC}\n${rangB}\n${rangA}\n${rangS}\n${rangSS}`)
.setColor("2f3136")

const msgwait = await message.channel.send({embeds: [embed]})
if(grade === "Sannin") {
await msgwait.react('🇪')
          .then(() => msgwait.react('🇩'))
          .then(() => msgwait.react('🇨'))
          .then(() => msgwait.react('🇧'))
          .then(() => msgwait.react('🇦'))
          .then(() => msgwait.react('🇸'))
          .then(() => msgwait.react('🌟'))
}
if(grade === "Genin") {
await msgwait.react('🇪')
          .then(() => msgwait.react('🇩'))
          .then(() => msgwait.react('🇨'))
}
/* if(message.member.roles.cache.has("911649477977341952") || message.member.roles.cache.has("911649480246456351") || message.member.roles.cache.has("911649481538281482")) */

    }}