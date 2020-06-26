const Discord = require('discord.js');
module.exports = {
	name: 'olddelete',
	description: 'holddelete command',
	execute(msg, args) {
        const args1 = msg.content.split(' ').slice(1); 
        const amount = args1.join(' '); 
        var messaageamount = parseInt(amount)
        if(isNaN(messaageamount)) return msg.reply("Give me a number!")
        var value = 0
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) return;
        while(value < messaageamount) {
            msg.channel.fetchMessages({ limit: 1 })
                .then(function(list){
                    msg.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR")})   
            value++                     
        }       
    },
};