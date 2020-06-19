const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "avatar",
  description: "Get your own or someone else's avatar",

  run: async (bot, message, args) => {
    let Embed = new MessageEmbed();
    if (!msg.mentions.users.first()) {
      Embed.setTitle(`Your avatar!`);
      Embed.setThumbnail(msg.author.displayAvatarURL());
      Embed.setColor(`RANDOM`);
      return msg.channel.send(Embed);
    } else {
      let User = msg.mentions.members.first();
      Embed.setTitle(`${bot.users.cache.get(User.id).tag}'s avatar!`);
      Embed.setThumbnail(bot.users.cache.get(User.id).displayAvatarURL());
      Embed.setColor(`RANDOM`);
      return msg.channel.send(Embed);
    }
  },
};