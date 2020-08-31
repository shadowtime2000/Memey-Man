const Discord = require("discord.js")
const request = require('request');
const cheerio = require('cheerio');
const randomPuppy = require('random-puppy')
exports.run = (bot, msg, args) => {

    let title
    let meme
    
    randomPuppy("aviationmemes")
    .then(url => {

        meme = url

        request(meme, (error, resp, body) => {
            if(error) {
                console.log(error)
            }
            let $ = cheerio.load(body);
            let $title = $('.post-title').text();

            title = $title

        });

    })

    const aviationmeme = new Discord.MessageEmbed()
        .setColor("#7cfc00")
        .setTitle(title)
        .setImage(meme)
        
    msg.channel.send(aviationmeme)
    

};