const fs = require("fs");
const Discord = require('discord.js')
const Profil = require('../../data/Profil.js')
const Shop = require('../../data/Shop.js')

module.exports = {
  name: "addshop",
    description: 'Crée un objet dans le shop!',
    usage: '',
    guildOnly: true,
    cooldown: 5,
        aliases: ["additem", "itemadd"],
    async execute(client, message, args) {
      message.delete()

      const filter = m => m.author === message.author

      const nameQ = await message.channel.send(`Quel sera le nom de votre objet ?`)
      const nameR = (await message.channel.awaitMessages({filter, max: 1})).first()
      nameQ.delete()
      nameR.delete()
      const descriptionQ = await message.channel.send(`Le nom de votre objet sera donc **${nameR}** !\nQuel sera la description de votre objet?`)
      const descriptionR = (await message.channel.awaitMessages({filter, max: 1})).first()
      descriptionQ.delete()
      descriptionR.delete()
      const prixQ = await message.channel.send(`Quel sera le prix de votre objet?`)
      const prixR = (await message.channel.awaitMessages({filter, max: 1})).first()
      prixQ.delete()
      prixR.delete()

if(isNaN(prixR.content)) return message.channel.send("Vous n'avez pas indiqué un chiffre, la création de l'objet a été annulée")

const embed = new Discord.MessageEmbed()
.addField(`> **${nameR}** - \`${prixR}\` <:Yen:929350482974085131>`, `** **\n\`${descriptionR}\``)
.setColor("2f3136")
const surQ = await message.channel.send("Êtes-vous sûr de vouloir ajouté cet objet dans le shop? Répondez par `Oui` ou `Non`")

      const validQ = await message.channel.send({embeds: [embed]})
      const validR = (await message.channel.awaitMessages({filter, max: 1})).first()




      surQ.delete()
validQ.delete()
validR.delete()
if(validR.content.toLowerCase( ).includes('oui')) {

  const generateUniqueId = require('generate-unique-id');
 
const id = generateUniqueId({
  length: 6,
  useLetters: false
});

  const data = new Shop({
    ObjetNom: nameR,
    ObjetDescription: descriptionR,
    ObjetPrix: prixR,
    ObjetID: id
    }) 
     
  data.save().catch(err => console.log(err))
  

   return message.channel.send("Objet ajouté à la boutique, effectuer la commande `.shop` pour voir votre item !")
  .then(msg => setTimeout(() => msg.delete(), 10000));

  
} if(validR.content.toLowerCase( ).includes('non')) {
   message.channel.send("Action annulée")
  .then(msg => setTimeout(() => msg.delete(), 5000));
} else {
  return message.channel.send("Réponse incorrecte, ajout de l'objet à la boutique annulée.")
}


}}