const Discord = require('discord.js');
exports.run = (bot, msg, args) => {
    
    const args1 = msg.content.split(' ').slice(2); 
    const kickreason = args1.join(' '); 
    const kickmember= msg.mentions.members.first();

    const noperm = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Missing permissions')
        .setDescription("You need ``Kick members`` permission to use this command.")
    
    const nomemmber = new Discord.MessageEmbed()
        .setColor('#FF6961')
        .setTitle('Invalid argument')
        .setDescription(prefix + "kick [member mention] [ban reason]")
        .setFooter("You didn't provide a member to kick.")

    const noreason = new Discord.MessageEmbed()
        .setColor('#FF6961')
        .setTitle('Invalid argument')
        .setDescription(prefix + "kick [member mention] [ban reason]")
        .setFooter("You didn't provide a kick reason.")

    const cantkick = new Discord.MessageEmbed()
        .setColor('#FF6961')
        .setTitle('Couldn\'t kick member')
        .setDescription("Failed to kick member.")

    if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm);
    if(!kickmember) return msg.channel.send(nomemmber)
    if(!kickreason) return msg.channel.send(noreason)

    const kickembed = new Discord.MessageEmbed()
        .setColor('#73DB6A')
        .setTitle('Successfully kicked ' + kickmember.displayName)
        .addFields(
            { name: 'Moderator', value: msg.member.displayName, inline: true },
            { name: 'Reason', value: kickreason, inline: true },
        ).setTimestamp()

    const dmkickembed = new Discord.MessageEmbed()
        .setColor('#FFB347')
        .setTitle(`You have been kicked from ${msg.guild.name}`)
        .addFields(
            { name: 'Moderator', value: msg.member.displayName, inline: true },
            { name: 'Reason', value: kickreason, inline: true },
        )
        .setTimestamp()

    kickmember.send(dmkickembed)
    .then(() => {
        kickmember.kick(kickreason).then(member => {
        msg.channel.send(kickembed)
        })
    }).catch(() => {
        msg.channel.send(cantkick);
    })

}
