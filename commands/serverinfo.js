const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'serverinfo command',
	execute(msg, args) {
        const serverembed = new Discord.MessageEmbed()
            .setColor("#999900")
            .setTitle("Server info")
            .setDescription(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}\nEmoji count: ${msgObject.guild.emojis.size}\nRole count: ${msgObject.guild.roles.size}`)
            .setTimestamp()
        msg.channel.send(serverembed)
	},
};