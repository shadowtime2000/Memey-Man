module.exports = {
	name: 'test',
	description: 'Ping!',
	execute(msg, args) {
		msg.channel.send('Pong.');
	},
};