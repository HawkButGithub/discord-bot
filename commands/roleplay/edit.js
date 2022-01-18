const Discord = require('discord.js');
const Profil = require('../../data/Profil.js');
const { MessageActionRow, MessageSelectMenu} = require('discord.js')

module.exports = {
    name: 'edit',
    description: 'Modifie le profil d\'un utilisateur',
    usage: '{mention}',
    guildOnly: true,
    cooldown: 5,
    args: true,
    aliases: ['modif'],
    async execute(client, message, args) {


const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
if(!mention) return message.channel.send("Vous devez mentionner quelqu'un après la commande!")

var nom = "";
var color = "";
var apparence = "";
var bijuu = "";
var kg = "";
var age = "";
var chakra = "";
var pupille = "";
var village = "";
var arme = "";
var userID = "";
var clan = "";
    Profil.findOne({
            userID: mention.id
        }, async (err, data) => {
            if (err) console.log(err);

nom = "Aucun";
color = "DEFAULT";
apparence = "";
bijuu = "Aucun";
kg = "Aucun";
age = "Inconnu";
chakra = "Aucune";
pupille = "Aucune";
village = "Aucun";
arme = "Aucune";
clan = "Aucun"
            
if(data) {
  if(data.nomrp) {
    nom = data.nomrp
    } else {
      nom = "Aucun"
    }
    if(data.clan) {
      clan = data.clan
    } else {
      clan = "Aucun"
    }
    if(data.userID) {
      userID = data.userID
    } else {
      userID = mention.id
    }
    if(data.village) {
      village = data.village
    } else {
      village = "Aucun"
    }
    if(data.color) {
      color = data.color
    } else {
      color = "DEFAULT"
    }
    if(data.apparence) {
      apparence = data.apparence
    } else {
      apparence = "https://www.adenine-rh.com/wp-content/themes/consultix/images/no-image-found-360x250.png";
    }
    if(data.bijuu) {
      bijuu = data.bijuu
    } else {
      bijuu = "Aucun"
    }
    if(data.kekkei) {
      kg = data.kekkei
    } else {
      kg = "Aucun"
    }
    if(data.age) {
      age = data.age
    } else {
      age = "Inconnu"
    }
    if(data.chakra) {
      chakra = data.chakra
            .replace("Katon", "<:katon:905031492256821258>")
      .replace("Raiton", "<:raiton:905031465807532052>")
      .replace("Futon", "<:futon:905031515266748446>")
      .replace("Doton", "<:doton:905031429996568596>")
      .replace("Suiton", "<:suiton:905031543968370720>")
    } else {
      chakra = "Aucune"
    }
    if(data.pupille) {
      pupille = data.pupille
    } else {
      pupille = "Aucune"
    } 
    if(data.arme) {
      arme = data.arme
    } else {
      arme = "Aucune"
    }
  }




           
          })
        }}