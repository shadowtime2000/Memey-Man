const Discord = require('discord.js');
const { stringify } = require('querystring');
module.exports = {
	name: 'serverinfo',
	description: 'serverinfo command',
	execute(msg, args) {
        var s = msg.guild.createdAt;
        s = s.substring(0, s.indexOf('+'));
        const serverembed = new Discord.MessageEmbed()
            .setColor("#999900")
            .setTitle("**Server info**")
            .setThumbnail(msg.guild.iconURL({ format: 'png' }))
            .addFields(
                { name: 'Server name', value: msg.guild.name },
                { name: 'Member count', value: msg.guild.memberCount },
                { name: 'Created time', value: s },
                { name: 'Server owner', value: msg.guild.owner },
                { name: 'Server ID', value: msg.guild.id }
            )
            .setTimestamp()
        msg.channel.send(serverembed)
	},
};