const Discord = require('discord.js');
module.exports = {
	name: 'kick',
	description: 'kick command',
	execute(msg, args) {

        if (msg.channel.type == "dm") return;

        const args1 = msg.content.split(' ').slice(2); 
        const kickreason = args1.join(' '); 
        let user = msg.mentions.members.first();

        const noperm = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("You can't use that command!")
        
        const nomemmber = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give a member to kick!")

        const noreason = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a reason!")

        const cantkick = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("An errror occurred.")

            if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm);
            if(!mem) return msg.channel.send(nomemmber)
            if(!kickreason) return msg.channel.send(noreason)
            
            const kickembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('**Successfully kicked member**')
                .setDescription( `**Kicked ${mem.displayName}.**` + '\n**Moderator**: ' + msg.member.displayName + '\n**Reason**: ' + kickreason )
                .setTimestamp()

            const dmkickembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`**You have been kicked from ${msg.guild.name}**`)
                .setDescription( '**Moderator**: ' + msg.member.displayName + '\n**Reason**: ' + kickreason )
                .setTimestamp()

            mem.send(dmkickembed)
            .then(() => {
                user.kick().then(() => {
                msg.channel.send(kickembed)
                })
            }).catch(() => {
                msg.channel.send(cantkick);
        });
    }
};