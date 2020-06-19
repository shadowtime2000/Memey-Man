const Discord = require('discord.js');
module.exports = {
	name: 'botinfo',
	description: 'botinfo command',
	execute(msg, args) {
        const infoEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**BOT INFO**')
            .setDescription('Bot name: Memey Man\nDeveloper: RedTea\nPrefix: &')
            .setFooter('Type &help to get help!')
	    msg.channel.send(infoEmbed);
	},
};