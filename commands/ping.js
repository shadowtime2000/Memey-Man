const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    msg.channel.send("Pong:")
    .then((sentMessage) => sentMessage.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`))
};