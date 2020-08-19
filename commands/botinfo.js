const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = (bot, msg, args) => {

    const infoEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('**Bot info**')
	.setThumbnail('https://i.imgur.com/XiiqQWn.png')
	.addFields(
            { name: 'Bot name', value: 'Memey Man' },
            { name: 'Developer', value: 'RedTea#8520' },
            { name: 'Bot prefix', value: '&' },
        )
        .setFooter('Type &help to get help!')

    msg.channel.send(infoEmbed);

};
