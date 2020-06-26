const Discord = require('discord.js');
module.exports = {
	name: 'purge',
	description: 'purge command',
	execute(msg, args) {
        if (msg.channel.type == "dm") return;

        const nopurge = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("You can't use that command!")
            .setFooter("I can only delete messages created within 14 days!")

        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(nopurge);
        const args1 = msg.content.split(' ').slice(1); 
        const amount = args1.join(' '); 
        const extranum = "1"
        const amountaa = parseInt(amount)
        const extranumaa = parseInt(extranum)
        const messageamount = amountaa + extranumaa

        if (!amount) return msg.reply('Tell me how many messages should I purge!'); 
        if (isNaN(amount)) return msg.reply('Give me a number!'); 

        if (amount > 99) return msg.reply("Too many messages to purge! Give me a smaller number."); 
        if (amount < 1) return msg.reply("You can't purge less than 1 message! Give me a bigger number."); 
        
        const purge = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Successfully deleted messages')
            .setDescription(`Deleted ${amountaa} messages.`)
            .setFooter("I can only delete messages created within 14 days!")

      
        msg.channel.messages.fetch({ limit: messageamount }).then(messages => {
            msg.channel.bulkDelete(messages).catch(error => console.log(error.stack))
            .then(() => msg.channel.send(purge))
            .then(sentEmbed => {
                sentEmbed.delete({ timeout: 5000 })
                }
            );
        })  
        .catch(() => msg.channel.send("An error occured."))
	},
};