const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'serverinfo command',
	execute(msg, args) {
        const serverembed = new Discord.MessageEmbed()
            .setColor("#999900")
            .setTitle("Server info")
            .setDescription(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`)
            .setTimestamp()
        msg.channel.send(serverembed)
	},
};