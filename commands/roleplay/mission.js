const fs = require("fs");
const Discord = require('discord.js')
const Profil = require('../../data/Profil.js')

module.exports = {
  name: "mission",
    description: 'Choisir une mission !',
    usage: ' ',
    guildOnly: true,
    cooldown: 5,
        aliases: ["quest", "quΓͺte"],
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
 rangE = "**πͺ : Mission de rang E**";
 rangD = "**π© : Mission de rang D**";
 rangC = "**π¨ : Mission de rang C**";
 rangB = "**π§ : Mission de rang B**";
 rangA = "**π¦ : Mission de rang A**";
 rangS = "**πΈ : Mission de rang S**";
 rangSS = "**π : Mission de rang SS+**";
 grade = "Sannin"
} else if(!grade) {
 rangE = "**πͺ : Mission de rang E**";
 rangD = "**π© : Mission de rang D**";
 rangC = "**π¨ : Mission de rang C**";

 grade = "Genin"
}


const embed = new Discord.MessageEmbed()
.setTitle('Menu des missions')
.setDescription(`> Vous Γͺtes du grade ${grade}, vous pouvez donc choisir parmis: \n\n${rangE}\n${rangD}\n${rangC}\n${rangB}\n${rangA}\n${rangS}\n${rangSS}`)
.setColor("2f3136")

const msgwait = await message.channel.send({embeds: [embed]})
if(grade === "Sannin") {
await msgwait.react('πͺ')
          .then(() => msgwait.react('π©'))
          .then(() => msgwait.react('π¨'))
          .then(() => msgwait.react('π§'))
          .then(() => msgwait.react('π¦'))
          .then(() => msgwait.react('πΈ'))
          .then(() => msgwait.react('π'))
}
if(grade === "Genin") {
await msgwait.react('πͺ')
          .then(() => msgwait.react('π©'))
          .then(() => msgwait.react('π¨'))
}
/* if(message.member.roles.cache.has("911649477977341952") || message.member.roles.cache.has("911649480246456351") || message.member.roles.cache.has("911649481538281482")) */

    }}