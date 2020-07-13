const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (bot, msg, args) => {
    const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=reuters&pageSize=5&apiKey=9ab9ebbe7afb4ede86c593e2a804b729`
    )
    const json = await response.json();
    const articleArr = json.articles;
    const articleLength = json.totalResults;
    const articlen =  Math.floor(Math.random() * (articleLength - 1));
    const article = articleArr[articlen]

    const embed = new Discord.MessageEmbed()
        .setColor('#FF4F00')
        .setTitle(article.title)
        .setURL(article.url)
        .setDescription(article.description)
        .setThumbnail(article.urlToImage)
        .setTimestamp(article.publishedAt)
        .setFooter(`Author: ${article.author}`)
      
    msg.channel.send(embed)
    
};