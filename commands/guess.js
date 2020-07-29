const Discord = require('discord.js');
const reverseImageSearch = require('reverse-image-search-google')
exports.run = (bot, msg, args) => {
    const doSomething = (results) => {
        console.log(results)
    }

    reverseImageSearch('i.ebayimg.com/00/s/OTAwWDkwMA==/z/3G8AAOSwzoxd80XB/$_83.JPG', doSomething)
};