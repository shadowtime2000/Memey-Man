const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
	name: 'avatar',
	description: 'avatar command',
	execute(msg, args) {
        let user = msg.mentions.members.first()
        const args1 = msg.content.split(' ').slice(1); 
        const memberid = args1.join(' '); 
        if(!memberid && !user) {
            const avatarEmbed = new Discord.MessageEmbed()
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(msg.author.id).tag, bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }))
                .setImage(msg.author.displayAvatarURL({ format: 'png' }));
            msg.channel.send(avatarEmbed);
        }
        if(user) {
            const useravatarEmbed = new Discord.MessageEmbed()            
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(user.id).tag, bot.users.cache.get(user.id).displayAvatarURL({ format: 'png' }))
                .setImage(bot.users.cache.get(user.id).displayAvatarURL({ format: 'png' }));
            msg.channel.send(useravatarEmbed);
        }
        if(memberid && !user && msg.guild.member(memberid)) {
            const idavatarEmbed = new Discord.MessageEmbed() 
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(memberid).tag, bot.users.cache.get(memberid).displayAvatarURL({ format: 'png' }))
                .setImage(bot.users.cache.get(memberid).displayAvatarURL({ format: 'png' }));
            msg.channel.send(idavatarEmbed);
        } 
        if(memberid && !user && !msg.guild.member(memberid) ) return msg.channel.send(":x: No results found.")
    }
};