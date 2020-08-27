const Discord = require('discord.js');
const ms = require('ms')
exports.run = (bot, msg, args) => {

    if (msg.channel.type == "dm") return;

    const noperm1 = new Discord.MessageEmbed()
        .setColor('#FF665B')
        .setTitle('Missing permissions')
        .setDescription("You need ``Manage channels`` permission to use this command.")

    const nonum = new Discord.MessageEmbed()
        .setColor('#FF665B')
        .setTitle('Invalid argument')
        .setDescription("Number should be less than or equal to 21600.")

    if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send(noperm1)

    var str = msg.content.split(' ').slice(1)
    str = str.join(" ")
    console.log(str)
    var num = ms(str)/1000

    if(num > 21600) return msg.channel.send(nonum)

    msg.channel.setRateLimitPerUser(num)

    const slowmodey = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Successfully set slowmode")
        .setDescription(`Slowmode set to ${str}.`)
        .setTimestamp()
        
    msg.channel.send(slowmodey)
    
};
