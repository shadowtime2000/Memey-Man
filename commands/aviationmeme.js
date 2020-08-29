const Discord = require("discord.js")
const randomPuppy = require('random-puppy')
exports.run = (bot, msg, args) => {
    
    randomPuppy("aviationmemes")
    .then(url => {
        msg.channel.send(url);
    })

};