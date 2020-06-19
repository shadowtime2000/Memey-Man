const Discord = require('discord.js');
module.exports = {
	name: 'test',
	description: 'test',
	execute(msg, args) {
        let user = msg.mentions.members.first()
        msg.channel.send(user.displayName)
	},
};