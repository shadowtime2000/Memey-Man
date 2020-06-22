const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'serverinfo command',
	execute(msg, args) {
        const time = msg.guild.createdAt
        time = time.split('+')[0]
        const serverembed = new Discord.MessageEmbed()
            .setColor("#999900")
            .setTitle("**Server info**")
            .setThumbnail(msg.guild.iconURL({ format: 'png' }))
            .addFields(
                { name: 'Server name', value: msg.guild.name },
                { name: 'Member count', value: msg.guild.memberCount },
                { name: 'Created time', value: time },
                { name: 'Server owner', value: msg.guild.owner },
                { name: 'Server ID', value: msg.guild.id }
            )
            .setTimestamp()
        msg.channel.send(serverembed)
	},
};