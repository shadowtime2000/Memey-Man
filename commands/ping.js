module.exports = {
	name: 'ping',
	description: 'ping command',
	execute(msg, args) {
        async function declaredAsAsync() {
            const m = await msg.channel.send("Pong:");
            m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
        }
	},
};