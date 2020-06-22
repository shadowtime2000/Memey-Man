const Discord = require('discord.js');
module.exports = {
	name: 'vote',
	description: 'vote command',
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
        const amounts = msg.content.split(" ", 3);
        const amount = amounts[2]
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
            if(amount == "1") {
                sentEmbed.react("1️⃣")
            }
            if(amount == "2") {
                sentEmbed.react("1️⃣")
                .then(() => sentEmbed.react("2️⃣"))
            }
            if(amount == "3") {
                sentEmbed.react("1️⃣")
                .then(() => sentEmbed.react("2️⃣"))
                .then(() => sentEmbed.react("3️⃣"))
            }
            if(amount == "4") {
                sentEmbed.react("1️⃣")
                .then(() => sentEmbed.react("2️⃣"))
                .then(() => sentEmbed.react("3️⃣"))
            }
            if(amount == "5") {
                sentEmbed.react("1️⃣")
                .then(() => sentEmbed.react("2️⃣"))
                .then(() => sentEmbed.react("3️⃣"))
            }
            if(amount == "6") {
                sentEmbed.react("1️⃣")
                .then(() => sentEmbed.react("2️⃣"))
                .then(() => sentEmbed.react("3️⃣"))
            }
            if(amount == "7") {
                sentEmbed.react("1️⃣")
                .then(() => sentEmbed.react("2️⃣"))
                .then(() => sentEmbed.react("3️⃣"))
            }
            if(amount == "8") {
                sentEmbed.react("1️⃣")
                .then(() => sentEmbed.react("2️⃣"))
                .then(() => sentEmbed.react("3️⃣"))
            }
            if(amount == "9") {
                sentEmbed.react("1️⃣")
                .then(() => sentEmbed.react("2️⃣"))
                .then(() => sentEmbed.react("3️⃣"))
            }
            if(amount == "10") {
                sentEmbed.react("1️⃣")
                .then(() => sentEmbed.react("2️⃣"))
                .then(() => sentEmbed.react("3️⃣"))
            }
            msg.react('✅')
        });
	},
};