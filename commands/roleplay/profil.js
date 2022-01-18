const Discord = require('discord.js');
const Profil = require('../../data/Profil.js');

module.exports = {
    name: 'profil',
    description: 'Regarde ton profil ou celui de la personne mentionnée !',
    usage: '{mention}',
    guildOnly: true,
    cooldown: 5,
    aliases: ['p'],
    execute(client, message, args) {

const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id);

const Level = require('../../data/Level.js')


    Profil.findOne({
            userID: user.id
        }, async (err, data) => {
            if (err) console.log(err);

            if (!data) {
                const embed = new Discord.MessageEmbed()
                    .setColor('d10000')
                    .setDescription('<:non:932604393000411187> | Vous/la personne mentionnée n\'a pas encore de personnage.');

                return message.channel.send({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000));
            }
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
var pv = ";"
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
var grade = "";

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

if(message.member.roles.cache.has("929077868523290706")) { // 50 Pv
pv = "50"
} else if (message.member.roles.cache.has("929077867306971168")) { // 40 pv
pv = "40"
} else if (message.member.roles.cache.has("929077865109159967")) { // 35 pv
pv = "35"
} else if (message.member.roles.cache.has("929077865541161080")) { // 30 pv
pv = "30"
} else if (message.member.roles.cache.has("929077865792798780")) { // 25 pv
pv = "25"
} else if (message.member.roles.cache.has("929077866199679017")) { // 20 pv
pv = "20"
} else if (message.member.roles.cache.has("929077866468085841")) { // 15 pv
pv = "15"
} else if (message.member.roles.cache.has("929077867298578552")) { // 10 pv
pv = "10"
} else if (message.member.roles.cache.has("929077868141629521")) { // 5 pv
pv = "5"
} else {
pv = "???"
}

if(message.member.roles.cache.has("929077858691870751")) { // Konoha
  village = "<@&929077858691870751>"
  } else if (message.member.roles.cache.has("929077859513933885")) { // Kiri
  village = "<@&929077859513933885>"
  } else if (message.member.roles.cache.has("929077859203571802")) { // Suna
  village = "<@&929077859203571802>"
  } else {
    village = ":x:"
  }

            if(message.member.roles.cache.has("930182009391820911")) { // Citoyen
              grade = "<@&930182009391820911>"
              } 
              else if(message.member.roles.cache.has("930182183988113409")) { // Deserteur
                grade = "<@&930182183988113409>"
                } 
               else if(message.member.roles.cache.has("929077857936867328")) { // Voyageur
                  grade = "<@&929077857936867328>"
                  } 
                 else if(message.member.roles.cache.has("929077856917663857")) { // Etudiant
                    grade = "<@&929077856917663857>"
                    } 
                    else if(message.member.roles.cache.has("929077856888295444")) { // Genin
                      grade = "<@&929077856888295444>"
                      } 
                     else if(message.member.roles.cache.has("929077856502419456")) { // Chunin
                        grade = "<@&929077856502419456>"
                        } 
                       else if(message.member.roles.cache.has("929077856120762368")) { // Jonin
                          grade = "<@&929077856120762368>"
                          } 
                         else if(message.member.roles.cache.has("928726451644153856")) { // Kage
                            grade = "<@&928726451644153856>"
                            } 
                           else if(message.member.roles.cache.has("930156713145938002")) { // Sensei
                              grade = "<@&930156713145938002>"
                              } 
                             else if(message.member.roles.cache.has("929077854774366208")) { // Anbu
                                grade = "<@&929077854774366208>"
                                } 
                               else if(message.member.roles.cache.has("930156695605362769")) { // Chef Anbu
                                  grade = "<@&930156695605362769>"
                                }
                                 else if(message.member.roles.cache.has("929077851507027998")) { // Epéeiste de la brume
                                    grade = "<@&929077851507027998>"
                                  }
                                 else if(message.member.roles.cache.has("930156697354379285")) { // Membre Akatsuki
                                    grade = "<@&930156697354379285>"
                                  }
                                 else if(message.member.roles.cache.has("930156696347758592")) { // Chef Akatsuki
                                    grade = "<@&930156696347758592>"
                                  }
                                 else if(message.member.roles.cache.has("928985385940418591")) { // Sannin
                                    grade = "<@&928985385940418591>"

                                  } else {
      grade = "Aucun"
    }

const embed = new Discord.MessageEmbed()
.addField(`<:866043385755729940:929722955825553408> | Profil de ${user.user.tag}`, "**`Ｐｒｅｎｏｍ：`** **" + nom + "\n" + "** **`Ｃｌａｎ：`** **" + clan + "\n" + "** **`Ａｇｅ：`** **" + age + "\n" + "** **`Ｖｉｌｌａｇｅ：`**" + ` **${village}**` + "\n" + "**`Ｇｒａｄｅ：`** " + `**${grade}**`)

// .addField("**Statistiques:**\n**`" + pv + "`" + " <:pv:932551123431206972>**", "** **")
.setColor("2f3136")
const row = new Discord.MessageActionRow()
.addComponents(
  new Discord.MessageButton()
  .setStyle('SECONDARY')
  .setLabel('Inventaire')
  .setEmoji("<:inventaire:932621863270645792>")
  .setCustomId(message.id + 'inventory'),

  new Discord.MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Techniques')
            .setEmoji("<a:techniques:932622582107222136>")
            .setCustomId(message.id + 'jutsu'),
        new Discord.MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Statistiques')
            .setEmoji("<:stat:932620497026441266>")
            .setCustomId(message.id + 'Stats'),
  );
// .setImage(apparence)
var expbar;

Level.findOne({
  userID: message.author.id
}, async (err, data) => {
  if (err) console.log(err);
if(data) {


if((100 / 100) * data.currentXp <= (10 / 100) * data.nextXp) expbar = "<:xp_vide:933039439486279680><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_fin:933036825415659530>"
if((100 / 100) * data.currentXp >= (10 / 100) * data.nextXp) expbar = "<:xp_bar:933036825667334184><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_fin:933036825415659530>"
if((100 / 100) * data.currentXp >= (20 / 100) * data.nextXp) expbar = "<:xp_bar:933036825667334184><:bar_pleine:933036227144327318><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_fin:933036825415659530>"
if((100 / 100) * data.currentXp >= (30 / 100) * data.nextXp) expbar = "<:xp_bar:933036825667334184><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_fin:933036825415659530>"
if((100 / 100) * data.currentXp >= (40 / 100) * data.nextXp) expbar = "<:xp_bar:933036825667334184><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_fin:933036825415659530>"
if((100 / 100) * data.currentXp >= (50 / 100) * data.nextXp) expbar = "<:xp_bar:933036825667334184><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_fin:933036825415659530>"
if((100 / 100) * data.currentXp >= (60 / 100) * data.nextXp) expbar = "<:xp_bar:933036825667334184><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_fin:933036825415659530>"
if((100 / 100) * data.currentXp >= (70 / 100) * data.nextXp) expbar = "<:xp_bar:933036825667334184><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_vide:933036825759608862><:bar_vide:933036825759608862><:bar_fin:933036825415659530>"
if((100 / 100) * data.currentXp >= (80 / 100) * data.nextXp) expbar = "<:xp_bar:933036825667334184><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_vide:933036825759608862><:bar_fin:933036825415659530>"
if((100 / 100) * data.currentXp >= (90 / 100) * data.nextXp) expbar = "<:xp_bar:933036825667334184><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_pleine:933036227144327318><:bar_fin:933036825415659530>"

embed.addField(`**<:xp:933036826262913024> XP \`${data.currentXp}\` / \`${data.nextXp}\`**`, `${expbar}`)

                    
      message.channel.send({embeds: [embed], components: [row]})
    }})
    })

}}