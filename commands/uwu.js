const Discord = require("discord.js")
const uwufy = require('uwufy')
exports.run = (bot, msg, args) => {
    const noping = new Discord.MessageEmbed()
        .setColor('#FF665B')
        .setTitle("User/role ping detected")
        .setDescription("Don't try to ping users and roles!")

    if(msg.mentions.users.first() || msg.mentions.roles.first()) return msg.channel.send(noping)
    if(msg.content == `${prefix}uwu @here` || msg.content == `${prefix}uwu @everyone`) return msg.channel.send(noping)

    const args1 = msg.content.split(' ').slice(1); 
    const text = args1.join(' ');  

    msg.channel.send(uwufy(text))
};