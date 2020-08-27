const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    const mutemember = msg.mentions.members.first();
    const role = msg.guild.roles.cache.find(r => r.name === 'Muted by Memey Man');

    const noperm = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Missing permissions')
        .setDescription("You need ``Kick members`` permission to use this command.")

    const nomem = new Discord.MessageEmbed()
        .setColor("#FFA500") 
        .setTitle('Invalid argument')
        .setDescription(prefix + "unmute [member mention]")
        .setFooter("You didn't provide a member to unmute.")

    if (!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm)

    if(!mutemember) return msg.channel.send(nomem);

    mutemember.roles.remove(role);

    const muted = new Discord.MessageEmbed()
        .setColor("#73DB6A")
        .setTitle(`Successfully unmuted ${mutemember.displayName}`)
        .addFields(
            { name: 'Moderator', value: msg.member.displayName, inline: true },
        )
        .setTimestamp()

    msg.channel.send(muted);

};
