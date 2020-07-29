const Discord = require('discord.js');
const searchByImage = require("reverse-image-search-google");
exports.run = (bot, msg, args) => {
    var searchpic = msg.attachments.first()

    const doSomething = (results) => {
        console.log(results)
    }

    searchByImage(searchpic, doSomething)
};