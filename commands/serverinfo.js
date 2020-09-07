const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    var a = msg.guild.createdAt.toString()
    a = a.split("+")[0]

    const serverembed = new Discord.MessageEmbed()
        .setColor("#999900")
        .setTitle("Server info")
        .setThumbnail(msg.guild.iconURL({ format: 'png' }))
        .addFields(
            { name: 'Server name', value: msg.guild.name, inline: true },
            { name: 'Server owner', value: msg.guild.owner, inline: true },
            { name: 'Created at', value: a, inline: true },
        )
        .addFields(
            { name: 'Member count', value: msg.guild.memberCount, inline: true},
            { name: 'Role count', value: msg.guild.roles.cache.size, inline: true },
            { name: 'Emoji count', value: msg.guild.emojis.cache.size, inline: true },
        )
        .addFields(
            { name: 'Server ID', value: msg.guild.id, inline: true },
            { name: 'Server region', value: msg.guild.region, inline: true },
            { name: 'Verification level', value: msg.guild.verificationLevel, inline: true }
        )
        .setTimestamp()

    msg.channel.send(serverembed)

};
