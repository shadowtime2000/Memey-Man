const Discord = require('discord.js');
module.exports = {
	name: 'ban',
    description: 'ban command',
    execute(bot, msg) {
        const args = msg.content.split(' ').slice(2); 
        const banreason = args.join(' '); 
        const banmember= msg.mentions.members.first();

        const noperm1 = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("You can't use that command!")

        const nomemberembed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a member to ban!")

        const noreasonembed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a reason!")

        const cantban = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("An error occurred.")

        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(noperm1)
        if(!banmember) return msg.channel.send(nomemberembed)
        if(!banreason) return msg.channel.send(noreasonembed)

        const banembed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('**Successfully banned member**')
            .setDescription( `**Banned ${mem1.displayName}.**` + '\n**Moderator**: ' + msg.member.displayName + '\n**Reason**: ' + banreason )
            .setTimestamp()

        const dmbanembed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle(`**You have been banned from ${msg.guild.name}**`)
            .setDescription( '**Moderator**: ' + msg.member.displayName + '\n**Reason**: ' + banreason )
            .setTimestamp()

        banmember.send(dmbanembed)
            .then(() => {
                banmember.ban(banreason).then(member => {
                msg.channel.send(banembed)
                })
            }).catch(() => {
                msg.channel.send(cantban);
        })
    }
}