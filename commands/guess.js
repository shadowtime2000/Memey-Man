const Discord = require('discord.js');
const searchByImage = require("searchByImage");
exports.run = (bot, msg, args) => {
    var searchpic = msg.attachments
    searchByImage(searchpic[0]).then((res) => msg.channel.send("Is that " + res[0].header + "?"));
};