const Discord = require('discord.js');
module.exports = {
	name: 'repeat',
	description: 'repeat command',
	execute(msg, args, [mention]) {
        const user = msg.mentions.members.first()
        const args1 = msg.content.split(' ').slice(1);
        var repeatword = args1.join(' ')
        if(!repeatword) return msg.reply('Nothing to repeat!');
        if(repeatword.includes(prefix + "kick")) return msg.reply("Don't try it!")
        if(repeatword.includes(prefix + "ban")) return msg.reply("Don't try it!")
        if(repeatword.includes(prefix + "purge")) return msg.reply("Don't try it!")   
        if(repeatword.includes("@everyone")) return msg.reply("Don't try it!")
        if(repeatword.includes("@here")) return msg.reply("Don't try it!")
        if(user) return msg.channel.send("I can't mention user!")
        var repeatword = repeatword.replace(/@&|@!/g, "**Non-ping:** ")
        msg.channel.send(repeatword)
	},
};