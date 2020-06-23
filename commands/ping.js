const Discord = require('discord.js');
module.exports = {
	name: '8ball',
	description: '8ball command',
	execute(msg, args) {
        async () => {
            const m = await msg.channel.send("Pong:");
            m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
        }
	},
};