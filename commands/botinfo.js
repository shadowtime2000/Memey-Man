const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
	name: 'botinfo',
	description: 'botinfo command',
	execute(msg, args) {
        const infoEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
			.setTitle('**Bot info**')
			.setThumbnail(bot.users.cache.get('702068724957446145').displayAvatarURL({ format: 'png' }))
			.addFields(
                { name: 'Bot name', value: 'Memey Man' },
                { name: 'Developer', value: 'RedTea' },
                { name: 'Bot prefix', value: '&' },
            )
            .setFooter('Type &help to get help!')
	    msg.channel.send(infoEmbed);
	},
};