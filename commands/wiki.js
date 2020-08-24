const Discord = require('discord.js');
const fetch = require('node-fetch');
exports.run = async (bot, msg, args) => {

    const nosearch = new Discord.MessageEmbed()
        .setColor("#FFA500")
        .setTitle("Invalid argument")
        .setDescription("&wiki [search word]")
        .setFooter("You didn't provide a search word.")

    const args1 = msg.content.split(' ').slice(1);
    const search = args1.join(' ');

    if (!search) return msg.channel.send(nosearch)

    const searchword = encodeURI(search)

    const res = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + searchword);
    const data = await res.json();

    const title = data.title;
    const text = data.extract || "Couldn't retrieve any result.";

    let thumbnail

    if (data.originalimage) {
        thumbnail = data.originalimage.source;
    } else {
        thumbnail = null
    }

    let url

    if (data.content_urls) {
        url = data.content_urls.desktop.page
    } else {
        url = null
    }

    const jokeembed = new Discord.MessageEmbed()
        .setColor(`#228B22`)
        .setTitle(title)
        .setURL(url)
        .setThumbnail(thumbnail)
        .setDescription(text)

    await msg.channel.send(jokeembed)

};