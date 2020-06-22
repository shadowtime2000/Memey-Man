const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'serverinfo command',
	execute(msg, args) {
        const noperm = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle("Oops!")
            .setDescription("You can't use that command!")

        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(noperm)

        const noembed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle("Vote command")
            .setDescription("Usage: &vote [channel mention] [option amount] [vote content]")

        const args1 = msg.content.split(' ').slice(3); 
        const votetitle = args1.join(' '); 
        const amount = msg.content.split(" ", 3);
        let mention = msg.mentions.channels.first();
        if(!mention) return msg.channel.send(noembed)
        if(!votetitle) return msg.channel.send(noembed)
        if(!amount) return msg.channel.send(noembed)

        const voteEmbed = new Discord.MessageEmbed()
            .setColor(`#FFC0CB`)
            .setTitle( "**Vote**: " + votetitle )
            .setDescription("React to vote!")
            .setFooter("Vote created by " + msg.member.displayName)
            .setTimestamp()

        mention.send(voteEmbed).then(sentEmbed => {
            sentEmbed.react("👍")
            .then(() => sentEmbed.react("👎"))
            msg.react('✅')
        });
        msg.channel.send(amount)
	},
};