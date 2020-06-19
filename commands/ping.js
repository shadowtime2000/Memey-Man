const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	description: 'ping command',
	run: async (msg, args) => {
        const m = await msg.channel.send("Pong:");
        m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
	},
};