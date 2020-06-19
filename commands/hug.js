const Discord = require('discord.js');
module.exports = {
	name: 'hug',
	description: 'hug command',
	execute(msg, args) {
        let user = msg.mentions.members.first();
        const huge = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Hug command')
            .setDescription('Usage: &hug [member mention]')
        if (!user) return msg.channel.send(huge)
        const hugee = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle( msg.member.displayName + " :hugging: " + user.displayName )
            .setDescription( msg.author.toString() + ' hugged ' + user.toString() + "!" )
        msg.channel.send(hugee)
	},
};