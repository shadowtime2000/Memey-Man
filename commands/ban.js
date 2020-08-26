const Discord = require('discord.js');
const prefix = require('/app/index.js').varToExport;
exports.run = (bot, msg, args) => {
    
    const args1 = msg.content.split(' ').slice(2); 
    const banreason = args1.join(' '); 
    const banmember= msg.mentions.members.first();

    const noperm1 = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Missing permissions')
        .setDescription("You need ``Ban members`` permission to use this command.")

    const nomemberembed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Invalid argument')
        .setDescription(prefix + "ban [member mention] [ban reason]")
        .setFooter("You didn't provide a member to ban.")

    const noreasonembed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Invalid argument')
        .setDescription(prefix + "ban [member mention] [ban reason]")
        .setFooter("You didn't provide a ban reason.")

    const cantban = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Couldn\'t ban member.')
        .setDescription("Failed to ban member.")

    if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(noperm1)
    if(!banmember) return msg.channel.send(nomemberembed)
    if(!banreason) return msg.channel.send(noreasonembed)

    const banembed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('**Successfully banned member**')
        .setDescription( `**Banned ${banmember.displayName}.**` + '\n**Moderator**: ' + msg.member.displayName + '\n**Reason**: ' + banreason )
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
