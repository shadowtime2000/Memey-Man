const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

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
    if(!amount || isNaN(amount)) return msg.channel.send(noembed)
    if(amount > 5 || amount < 1) return msg.reply("Amount must be equal to or larger than 1, and equal to or smaller than 5.")

    const voteEmbed = new Discord.MessageEmbed()
        .setColor(`#FFC0CB`)
        .setTitle( `**Vote by ${msg.member.displayName}**` )
        .setDescription(votetitle)
        .setFooter("React to vote!")
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
            .then(() => sentEmbed.react("4️⃣"))
        }
        if(amount == "5") {
            sentEmbed.react("1️⃣")
            .then(() => sentEmbed.react("2️⃣"))
            .then(() => sentEmbed.react("3️⃣"))
            .then(() => sentEmbed.react("4️⃣"))
            .then(() => sentEmbed.react("5️⃣"))
        }
        msg.react('✅')
    });

};