const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    var facts = ["1", "2", "3", "4", "5", "6"]
    var fact = Math.floor(Math.random() * facts.length);     const coinembed = new Discord.MessageEmbed()
        .setColor('#9c51b6')
        .setTitle('Coin flip')
        .setDescription( 'Result: ' + facts[fact] )
        .setTimestamp()
    msg.channel.send(coinembed)

};
