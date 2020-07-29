const Discord = require('discord.js');
const searchByImage = require("reverse-image-search-google");
exports.run = (bot, msg, args) => {
    var searchpic = msg.attachments

    const reverseImageSearch = require('reverse-image-search-google')

    const doSomething = (results) => {
        console.log(results)
    }

    reverseImageSearch(searchpic[0].url, doSomething)
};