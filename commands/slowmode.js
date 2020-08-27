const Discord = require('discord.js');
const ms = require('ms')
exports.run = (bot, msg, args) => {

    if (msg.channel.type == "dm") return;

    const noperm1 = new Discord.MessageEmbed()
        .setColor('#FFa500')
        .setTitle('Missing permissions')
        .setDescription("You need ``Manage channels`` permission to use this command.")

    const nonum = new Discord.MessageEmbed()
        .setColor('#FFa500')
        .setTitle('Invalid argument')
        .setDescription("Number should be less than or equal to 21600.")

    if(!msg.member.hasPermission("MANAGE_CHANNELS") && msg.author.id != "611396886418685982") return msg.channel.send(noperm1)

    var str = msg.content.split('&slowmode ');
    
    if(num > 21600) return msg.channel.send(nonum)

    if (!num) {

        msg.channel.setRateLimitPerUser(ms(str)*1000)

        const slowmodeoff = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("Successfully turned off slowmode")
            .setDescription(`Turned off slowmode.`)
            .setFooter('Slowmode time unit is seconds')
            .setTimestamp()

        msg.channel.send(slowmodeoff)

    } else {

        msg.channel.setRateLimitPerUser(num)

        const slowmodey = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("Successfully set slowmode")
            .setDescription(`Slowmode set to ${num}s.`)
            .setFooter('Slowmode time unit is seconds')
            .setTimestamp()
            
        msg.channel.send(slowmodey)
       
    }
    
};
