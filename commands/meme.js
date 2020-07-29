const Discord = require('discord.js');
const fetch = require('node-fetch');
exports.run = (bot, msg, args) => {
    function meme() {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {

                const memeembed = new Discord.MessageEmbed()
                    .setColor('#7cfc00')
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Subreddit: r/${json.subreddit}`)   

                msg.channel.send(memeembed) 
                
            });
    }

    meme()

};