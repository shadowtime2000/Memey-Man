const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'serverinfo command',
	execute(msg, args) {
        const serverembed = new Discord.MessageEmbed()
            .setColor("#999900")
            .setTitle("Server info")
            .setDescription(`**Server name**: ${msg.guild.name}\n**Member count**: ${msg.guild.memberCount}\n**Server owner**: ${msg.guild.owner}\n**Server ID**: ${msg.guild.id}`)
            .setTimestamp()
        msg.channel.send(serverembed)
	},
};