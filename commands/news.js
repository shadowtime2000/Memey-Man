const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (bot, msg, args) => {
    const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=reuters&pageSize=5&apiKey=9ab9ebbe7afb4ede86c593e2a804b729`
    )
    const json = await response.json();
    const articleArr = json.articles;
    const embed = new Discord.MessageEmbed()
        .setColor('#FF4F00')
        .setTitle(article.title)
        .setURL(article.url)
        .setAuthor(article.author)
        .setDescription(article.description)
        .setThumbnail(article.urlToImage)
        .setTimestamp(article.publishedAt)
      
    msg.channel.send(embed)

    async function processArray(array) {
        for (const article of array) {
        const msg = await processArticle(article);
        msg.channel.send(msg)
        }
    } 
};