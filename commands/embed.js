const Discord = require('discord.js');
exports.run = (bot, msg, args) => {
        const args1 = msg.content.split(' ').slice(1);
        const repeatword = args1.join(' ')
        if(!repeatword) return msg.reply('Nothing to put in an embed!');
        const embedembed = new Discord.MessageEmbed()
            .setColor('#003152')
            .setTitle('Message from ' + msg.member.displayName)
            .setDescription(repeatword)
            .setTimestamp()
        msg.channel.send(embedembed)
};