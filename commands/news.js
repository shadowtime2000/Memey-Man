const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = (bot, msg, args) => {
    try {
         const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=reuters&pageSize=5&apiKey=${newsAPI}`
        );
        const json = await response.json();
        const articleArr = json.articles;
        let processArticle = article => {
            const embed = new Discord.MessageEmbed()
                .setColor('#FF4F00')
                .setTitle(article.title)
                .setURL(article.url)
                .setAuthor(article.author)
                .setDescription(article.description)
                .setThumbnail(article.urlToImage)
                .setTimestamp(article.publishedAt)
            return embed;
        };

        async function processArray(array) {
            for (const article of array) {
            const msg = await processArticle(article);
            msg.channel.send(msg)
            }
        }
        
    } catch (e) {
        message.say('Something failed along the way');
        return console.error(e);
    }
  
};