const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    const mutemember = msg.mentions.members.first();
    const role = msg.guild.roles.cache.find(r => r.name === 'Muted');

    const args1 = msg.content.split(' ').slice(3); 
    const mutereason = args1.join(' ');

    const noperm = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('Missing permissions')
        .setDescription("You need ``Kick members`` permission to use this command.")

    const nomem = new Discord.MessageEmbed()
        .setColor("#FFA500") 
        .setTitle('Invalid argument')
        .setDescription(prefix + "mute [member mention] [reason]")
        .setFooter("You didn't provide a member to mute.")

    const nor = new Discord.MessageEmbed()
        .setColor("#FFA500") 
        .setTitle('Invalid argument')
        .setDescription(prefix + "mute [member mention] [reason]")
        .setFooter("You didn't provide a mute reason.")

    if(!role) {
        msg.guild.roles.create({
            data:{
                name: "Muted",
                color: "#000000",
                permissions: []
            }
        })
    }

    if (!msg.author.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm)

    if(!mutemember) return msg.channel.send(nomem);
    if(!mutereason) return msg.channel.send(nor)

    msg.guild.channels.cache.forEach((channel) => {
        channel.overwritePermissions(role, {
            SEND_MESSAGES: false
        });
        mutemember.roles.add(role);
    });

    const muted = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle(`Successfully muted member`)
        .setDescription(`**Muted ${mutemember.displayName}.**\n**Moderator**: ${msg.author.displayName}\n**Reason**: ${mutereason}`)
        .setTimestamp()

    msg.channel.send(muted);

};
