const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
	name: 'avatar',
	description: 'avatar command',
	execute(msg, args) {
        const user = msg.mentions.members.first()
        const arguments = msg.content.split(' ').slice(1); 
        const memberid = arguments.join(' '); 
        if(!memberid && !user) {
            const avatarEmbed = new Discord.MessageEmbed()
                .setColor(`#006a4e`)
                //.setAuthor(bot.users.cache.get(msg.author.id).tag, msg.author.displayAvatarURL())
                .setImage(msg.author.displayAvatarURL({ dynamic:true }));
            msg.channel.send(avatarEmbed);
        }
        if(user) {
            const useravatarEmbed = new Discord.MessageEmbed()            
                .setColor(`#006a4e`)
                //.setAuthor(bot.users.cache.get(user.id).tag, bot.users.cache.get(user.id).displayAvatarURL())
                .setImage(bot.users.cache.get(user.id).displayAvatarURL({ dynamic:true }));
            msg.channel.send(useravatarEmbed);
        }
        if(memberid && !user && msg.guild.member(memberid)) {
            const idavatarEmbed = new Discord.MessageEmbed() 
                .setColor(`#006a4e`)
                //.setAuthor(bot.users.cache.get(memberid).tag, bot.users.cache.get(memberid).displayAvatarURL())
                .setImage(bot.users.cache.get(memberid).displayAvatarURL({ dynamic:true }));
            msg.channel.send(idavatarEmbed);
        } 
        if(memberid && !user && !msg.guild.member(memberid) ) return msg.channel.send(":x: No results found.")
	},
};