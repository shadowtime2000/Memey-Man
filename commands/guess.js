const Discord = require('discord.js');
const searchByImage = require("search-image");
exports.run = (bot, msg, args) => {

    searchByImage("i.ebayimg.com/00/s/OTAwWDkwMA==/z/3G8AAOSwzoxd80XB/$_83.JPG").then((res) => console.log(res));

};