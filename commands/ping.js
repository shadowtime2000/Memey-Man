module.exports = {
	name: 'ping',
	description: 'ping command',
	execute(msg, args) {
        const declaredAsAsync = async () => {
            const m = msg.channel.send("Pong:");
            m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
        }
	},
};