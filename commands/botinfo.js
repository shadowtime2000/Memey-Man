const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = (bot, msg, args) => {

    const infoEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('**Bot info**')
        .setThumbnail('https://i.imgur.com/XiiqQWn.png')
        .addFields(
                { name: 'Bot name', value: 'Memey Man'  },
                { name: 'Developer', value: 'RedTea#8520', inline = true },
                { name: 'Bot prefix', value: prefix, inline = true},
                { name: 'Server count', value: bot.guilds.cache.size },
                { name: 'USer count', value: bot.users.cache.size, inline = true},
        )
        .setFooter('Type ' + prefix + 'help to get help!')

    msg.channel.send(infoEmbed);

};
