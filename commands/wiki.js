const Discord = require('discord.js');
const fetch = require('node-fetch');
exports.run = async (bot, msg, args) => {

    const args1 = msg.content.split(' ').slice(1);
    const search = args1.join(' ');
    const searchword = encodeURI(search)

    const res = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Stack_Overflow" + searchword);
    const data = await res.json();

    const title = data.title;
    const text = data.extract;

    const jokeembed = new Discord.MessageEmbed()
        .setColor(`#228B22`)
        .setAuthor(title)
        .setDescription(text)

    await msg.channel.send(jokeembed)

};