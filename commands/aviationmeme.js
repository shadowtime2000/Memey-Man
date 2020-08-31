const Discord = require("discord.js")
const randomPuppy = require('random-puppy')
const request = require('request');
const cheerio = require('cheerio');
exports.run = (bot, msg, args) => {

    let meme
    
    randomPuppy("aviationmemes")
    .then(url => {
        meme = url
    })

    request(meme, (error, resp, body) => {
        if(error) {
            console.log(error)
        }
        let $ = cheerio.load(body);
        let $title = $('.post-title').text();

        console.log($title)

    });

};