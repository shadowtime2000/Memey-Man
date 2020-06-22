const Discord = require('discord.js');
module.exports = {
	name: 'test',
	description: '.',
	execute(msg, args) {
        msg.channel.send(msg.author.displayAvatarURL({ format: 'png' }))
    },
};