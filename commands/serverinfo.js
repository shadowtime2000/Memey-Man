const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    const serverembed = new Discord.MessageEmbed()
        .setColor("#999900")
        .setTitle("Server info")
        .setThumbnail(msg.guild.iconURL({ format: 'png' }))
        .addFields(
            { name: 'Server name', value: msg.guild.name },
            { name: 'Member count', value: msg.guild.memberCount },
            { name: 'Server owner', value: msg.guild.owner },
            { name: 'Server ID', value: msg.guild.id }
        )
        .setTimestamp()

    msg.channel.send(serverembed)

};
