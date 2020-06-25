const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
	name: 'userinfo',
	description: 'userinfo command',
	execute(msg, args) {
        const user = msg.mentions.members.first()
        const arguments = msg.content.split(' ').slice(1); 
        const memberid = arguments.join(' '); 
        if(!memberid && !user) {
            const nouserEmbed = new Discord.MessageEmbed()
                .setColor(`#E0FFFF`)
                .setTitle("Userinfo command")
                .setDescription("Usage: &userinfo [member mention]")
            msg.channel.send(nouserEmbed);
        }
        if(user) {
            const userinfoEmbed = new Discord.MessageEmbed()            
                .setColor(`#E0FFFF`)
                .setAuthor(bot.users.cache.get(user.id).tag, bot.users.cache.get(user.id).displayAvatarURL({ format: 'png' }))
                .addFields(
                    { name: 'User username', value: user.username },
                    { name: 'User nickname', value: user.displayName },
                    { name: 'Account created at', value: user.createdAt },
                    { name: 'Joined server at', value: user.joinedAt },
                    { name: 'User ID', value: user.id }
                )
                .setTimestamp()
            msg.channel.send(userinfoEmbed);
        }
        if(memberid && !user && msg.guild.member(memberid)) {
            const idinfoEmbed = new Discord.MessageEmbed() 
                .setColor(`#E0FFFF`)
                .setAuthor(bot.users.cache.get(memberid).tag, bot.users.cache.get(memberid).displayAvatarURL({ format: 'png' }))
                .addFields(
                    { name: 'Server name', value: msg.guild.name },
                    { name: 'Member count', value: msg.guild.memberCount },
                    { name: 'Server owner', value: msg.guild.owner },
                    { name: 'Server ID', value: msg.guild.id }
                )
                .setTimestamp()
            msg.channel.send(idavatarEmbed);
        } 
        if(memberid && !user && !msg.guild.member(memberid) ) return msg.channel.send(":x: No results found.")

    },
};