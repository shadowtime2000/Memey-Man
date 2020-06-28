const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports.execute = async (msg, args) => {
    const m = await msg.channel.send("Pong:");
    m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
};

module.exports = {
    name: "ping",
    description: "ping"
  };