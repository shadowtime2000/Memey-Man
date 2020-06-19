module.exports = {
	name: 'invite',
	description: 'invite command',
	execute(msg, args) {
		msg.author.send('https://discord.gg/p9Tfd45')
		msg.reply('DM sent!');
	},
};