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
                    .setTitle("Gayrate :rainbow_flag:")
                    .setDescription(`You are ${rate}% gay!`)
                msg.channel.send(rateembed)
            } if(member) {
                const memberrateembed = new Discord.MessageEmbed()
                    .setColor("#cccccc")
                    .setTitle("Gayrate :rainbow_flag:")
                    .setDescription(`${member.displayName} is ${rate}% gay!`)
                msg.channel.send(memberrateembed)
            }
        },
};