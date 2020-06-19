const Discord = require('discord.js');
module.exports = {
	name: 'coinflip',
	description: 'coinflip command',
	execute(msg, args) {
        var facts = ["What is your favorite drink?", "What country do you want to visit?", "What is your favorite Discord server?", "What is your favorite song?", "What did you do yesterday?", "What will you do tomorrow?", "What is your favorite movie?", "What is your favorite food?", "What games do you play?", "What is your favorite game?"];
        var fact = Math.floor(Math.random() * facts.length);
        const topicEmbed = new Discord.MessageEmbed()
            .setColor('#7cfc00')
            .setTitle('**Topic:**')
            .setDescription(facts[fact])
            .setTimestamp()
        msg.channel.send(topicEmbed);
	},
};