const Discord = require('discord.js');
module.exports = {
	name: '8ball',
	description: '8ball command',
	execute(msg, args) {
        const args1 = msg.content.split(' ').slice(1); 
        const question = args1.join(' '); 
        var facts = ["Yes.", "No.", "I don't know", "Of course.", "Never.", "Maybe.", "Hmm...", "Excuse me?"];
        var fact = Math.floor(Math.random() * facts.length);
        const ballembed = new Discord.MessageEmbed()
            .setColor('#9c51b6')
            .setTitle('**8ball**')
            .setDescription( '**Your question**: ' + question + '\n**My answer**: ' + facts[fact] )
            .setTimestamp()
        msg.channel.send(ballembed);
	},
};