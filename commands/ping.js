const Discord = require("discord.js");
module.exports = {
  name: "ping",
  description: "Returns latency and API ping",
  run: async (bot, msg, args) => {
    const m = msg.channel.send(`🏓 Pinging....`).then((msg) => {
      const _ = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(
          `🏓 Pong!\nLatency is ${Math.floor(
            m.createdTimestamp - msg.createdTimestamp
          )}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`
        )
        .setColor("RANDOM");
      msg.edit(_);
      msg.edit("\u200B");
    });
  },
};