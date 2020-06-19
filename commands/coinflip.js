const Discord = require('discord.js');
module.exports = {
	name: 'coinflip',
	description: 'coinflip command',
	execute(msg, args) {
        var facts = ["Head", "tail"]
        var fact = Math.floor(Math.random() * facts.length);
        const coinembed = new Discord.MessageEmbed()
            .setColor('#9c51b6')
            .setTitle('Coin flip')
            .setDescription( 'Result: ' + facts[fact] )
            .setTimestamp()
        msg.channel.send(coinembed)
	},
};