const Discord = require('discord.js');
module.exports = {
	name: 'gayrate',
	description: 'gayrate command',
	execute(msg, args) {
            const member = msg.mentions.members.first();
            const rate = Math.random() * (100);
            if(!member) {
                const rateembed = new Discord.MessageEmbed()
                    .setColor("#cccccc")
                    .setTitle("Gayrate")
                    .setDescription(`You are ${rate}% gay! :gay-pride-flag:`)
                msg.channel.send(rateembed)
            } if(member) {
                const memberrateembed = new Discord.MessageEmbed()
                    .setColor("#cccccc")
                    .setTitle("Gayrate")
                    .setDescription(`${member.displayName} is ${rate}% gay! :gay-pride-flag:`)
                msg.channel.send(memberrateembed)
            }
        },
};