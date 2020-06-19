module.exports = {
	name: 'ping',
	description: 'ping command',
	execute(msg, args) {
        run: async (bot, msg, args) => {
            const m = msg.channel.send("Pong:");
            m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
        }
	},
};