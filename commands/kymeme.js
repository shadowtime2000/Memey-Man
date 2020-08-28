const Discord = require('discord.js')
const nodeyourmeme =require('nodeyourmeme')

exports.run = (bot, msg, args) => {
    
    const nosearch = new Discord.MessageEmbed()
        .setColor("#FF665B")
        .setTitle("Invalid argument")
        .setDescription(prefix + "kymeme [search word]")
        .setFooter("You didn't provide a search word.")

    const args1 = msg.content.split(' ').slice(1);
    const search = args1.join(' ');

    if (!search) return msg.channel.send(nosearch)

    try {

        var res = await nodeyourmeme.search(search)

    } catch (error) {

        msg.channel.send(error)

    }

    const meme = new Discord.MessageEmbed()
        .setColor("#0a094f")
        .setTitle(res.name)
        .setDescription(res.about)

    msg.channel.send(meme)

};