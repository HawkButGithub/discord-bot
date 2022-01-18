module.exports = async (client) => {
  console.log(`Connecté dans ${client.user.tag}`)
  client.user.setActivity("discord.gg/narutorp", {
  type: "STREAMING",
  url: "https://www.twitch.tv/monstercat"
});
};
