const Discord = require('discord.js');
const { stringify } = require('querystring');
module.exports = {
	name: 'serverinfo',
	description: 'serverinfo command',
	execute(msg, args) {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        var s = msg.guild.verificationLevel
        s = toString(s)
        s = toLowerCase(s)
        s = capitalizeFirstLetter(s)
        
        const serverembed = new Discord.MessageEmbed()
            .setColor("#999900")
            .setTitle("**Server info**")
            .setThumbnail(msg.guild.iconURL({ format: 'png' }))
            .addFields(
                { name: 'Server name', value: msg.guild.name },
                { name: 'Member count', value: msg.guild.memberCount },
                { name: 'Verification level', value: s },
                { name: 'Server owner', value: msg.guild.owner },
                { name: 'Server ID', value: msg.guild.id }
            )
            .setTimestamp()
        msg.channel.send(serverembed)
	},
};