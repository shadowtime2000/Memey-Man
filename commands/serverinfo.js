const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    const serverembed = new Discord.MessageEmbed()
        .setColor("#999900")
        .setTitle("Server info")
        .setThumbnail(msg.guild.iconURL({ format: 'png' }))
        .addFields(
            { name: 'Server name', value: msg.guild.name, inline: true },
            { name: 'Server owner', value: msg.guild.owner, inline: true },
            { name: 'Created at', value: msg.guild.createdAt, inline: true },
        )
        .addFields(
            { name: 'Member count', value: msg.guild.memberCount, inline: true},
            { name: 'Role count', value: msg.guild.roles.cache.size, inline: true },
            { name: 'Emoji count', value: msg.guild.emojis.cache.size, inline: true },
            { name: 'Server ID', value: msg.guild.id, inline: true }
        )
        .setTimestamp()

    msg.channel.send(serverembed)

};
