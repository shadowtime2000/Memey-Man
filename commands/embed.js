const Discord = require('discord.js');
const prefix = require('./index.js').varToExport;
exports.run = (bot, msg, args) => {

    const args1 = msg.content.split(' ').slice(1);
    const repeatword = args1.join(' ')

    const noword = new Discord.MessageEmbed()
        .setColor("FFA500")
        .setTitle("Invalid argument")
        .setDescription(prefix + "embed [text]")
        .setFooter("You didn't provide the text to put in an embed.")

    if(!repeatword) return msg.channel.send(noword);

    const embedembed = new Discord.MessageEmbed()
        .setColor('#003152')
        .setTitle('Message from ' + msg.member.displayName)
        .setDescription(repeatword)
        .setTimestamp()

    msg.channel.send(embedembed)

};
