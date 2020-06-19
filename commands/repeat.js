const Discord = require('discord.js');
module.exports = {
	name: 'repeat',
	description: 'repeat command',
	execute(msg, args) {

        function getUserFromMention(mention) {
            if (!mention) return;
        
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
        
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
                return bot.users.cache.get(mention);
            }
        }

        const user = getUserFromMention(args[0]);
        const args1 = msg.content.split(' ').slice(1);
        var repeatword = args1.join(' ')
        if(!repeatword) return msg.reply('Nothing to repeat!');
        if(repeatword.includes("&kick")) return msg.reply("Don't try it!")
        if(repeatword.includes("&ban")) return msg.reply("Don't try it!")
        if(repeatword.includes("&purge")) return msg.reply("Don't try it!")   
        if(repeatword.includes("&slowmode")) return msg.reply("Don't try it!")  
        if(repeatword.includes("&vote")) return msg.reply("Don't try it!")  
        if(repeatword.includes("@everyone")) return msg.reply("Don't try it!")
        if(repeatword.includes("@here")) return msg.reply("Don't try it!")
        if(user) return msg.channel.send("I can't mention user!")
        var repeatword = repeatword.replace(/@&|@!/g, "**Non-ping:** ")
        msg.channel.send(repeatword)
	},
};