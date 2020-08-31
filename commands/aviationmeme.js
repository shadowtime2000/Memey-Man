const Discord = require("discord.js")
const randomPuppy = require('random-puppy')
const request = require('request');
const cheerio = require('cheerio');
exports.run = async (bot, msg, args) => {

    var res = await randomPuppy("aviationmemes")
    var url = res.split(".")[0] + "." + res.split(".")[1]


    request(url, (error, resp, body) => {
        if(error) {
            console.log(error)
        }
        let $ = cheerio.load(body);
        let $title = $('.post-title').text();
    });

    const aviationmeme = new Discord.MessageEmbed()
        .setColor("#7cfc00")
        .setTitle($title)
        .setImage(res)

    msg.channel.send(aviationmeme)

};