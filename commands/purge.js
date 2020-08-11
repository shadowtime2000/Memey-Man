const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    
    if (msg.channel.type == "dm") return;

    const nopurge = new Discord.MessageEmbed()
        .setColor('#FFa500')
        .setTitle('Missing permissions')
        .setDescription("You need ``Manage Messages`` permission to use this command.")

    const nopurgeargs = new Discord.MessageEmbed()
        .setColor('#FFa500')
        .setTitle('Invalid argument')
        .setDescription("You didn't provide the number messages to purge.")

    const invnumber = new Discord.MessageEmbed()
        .setColor('#FFa500')
        .setTitle('Invalid argument')
        .setDescription("Number of messages should be a number.")

    const invnumberbig = new Discord.MessageEmbed()
        .setColor('#FFa500')
        .setTitle('Invalid argument')
        .setDescription("It's unable to purge more than 100 messages.")

    const invnumbersmall = new Discord.MessageEmbed()
        .setColor('#FFa500')
        .setTitle('Invalid argument')
        .setDescription("It's unable to purge less than 1 message..")

    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(nopurge);

    const args1 = msg.content.split(' ').slice(1); 
    const amount = args1.join(' '); 
    const amountaa = parseInt(amount)

    if (!amount) return msg.channel.send(nopurgeargs); 
    if (isNaN(amount)) return msg.channel.send(invnumber)

    if (amount > 99) return msg.channel.send(invnumberbig)
    if (amount < 1) return msg.channel.send(invnumbersmall)
    
    msg.channel.messages.fetch({ limit: amountaa }).then(messages => {
        msg.channel.bulkDelete(messages)
    }).catch(error => 
        msg.reply("There was an error during purge."))

    await msg.channel.messages.fetch({ limit: 1 }).then(messages => {
        msg.channel.bulkDelete(messages)
    }).catch(error => 
        msg.reply("There was an error during purge."))
            
};