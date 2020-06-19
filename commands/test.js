const Discord = require('discord.js');
module.exports = {
	name: 'test',
	description: 'test',
	execute(msg, args) {
        let user = msg.guild.members.cache.get(args[0]);
        msg.channel.send(user.displayName)
	},
};