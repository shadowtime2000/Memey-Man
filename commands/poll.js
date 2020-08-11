const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    const noperm = new Discord.MessageEmbed()
        .setColor('#FFFF00')
        .setTitle("Missing permissions")
        .setDescription("You need ``Manage messages`` permission to use this command.")

    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(noperm)

    const nochannel = new Discord.MessageEmbed()
        .setColor('#FFC0CB')
        .setTitle("Poll command")
        .setDescription("Usage: &poll [channel mention] [poll content]")

    const notitle = new Discord.MessageEmbed()
        .setColor('#FFC0CB')
        .setTitle("Poll command")
        .setDescription("Usage: &poll [channel mention] [poll content]")

    const args1 = msg.content.split(' ').slice(2); 
    const votetitle = args1.join(' '); 
    let mention = msg.mentions.channels.first();
    if(!mention) return msg.channel.send(noembed)
    if(!votetitle) return msg.channel.send(noembed)

    const voteEmbed = new Discord.MessageEmbed()
        .setColor(`#FFC0CB`)
        .setTitle( `**Poll by ${msg.member.displayName}**` )
        .setDescription(votetitle)
        .setFooter("React to vote!")
        .setTimestamp()

    mention.send(voteEmbed).then(sentEmbed => {
        sentEmbed.react("👍")
        .then(() => sentEmbed.react("👎"))
        msg.react('✅')
    });
    
};