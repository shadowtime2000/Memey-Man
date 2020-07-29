const Discord = require('discord.js');
const fetch = require('node-fetch');
exports.run = (bot, msg, args) => {
    function meme() {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {

                if(json.nsfw == "true") {
                    console.log("Filtered 1 meme (Reason: NSFW)")
                    return meme()
                }

                if(json.subreddit == "dankmemes") {
                    console.log("Filtered 1 meme (Reason: SUBREDDIT)")
                    return meme()
                }

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