const Discord = require('discord.js');
module.exports = {
	name: 'slowmode',
	description: 'slowmode command',
	execute(msg, args) {

        if (msg.channel.type == "dm") return;

        const noperm1 = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("You can't use that command!")

        const nonum = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Number should be less than or equal to 21600.")

        if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send(noperm1)

        var str = msg.content.split('&slowmode ');
        var num = parseInt(str[1], 10);
        if(num > 21600) return msg.channel.send(nonum)
        if(!num) {
            msg.channel.setRateLimitPerUser(num)
            const slowmodeoff = new Discord.MessageEmbed()
                .setColor('#EE0000')
                .setTitle("Successfully turned off slowmode")
                .setDescription(`Turned off slowmode.`)
                .setFooter('Slowmode time unit is seconds')
                .setTimestamp()
            msg.channel.send(slowmodeoff)
        }
        else {
            msg.channel.setRateLimitPerUser(num)
            const slowmodey = new Discord.MessageEmbed()
                .setColor('#EE0000')
                .setTitle("Successfully set slowmode")
                .setDescription(`Slowmode set to ${num}s.`)
                .setFooter('Slowmode time unit is seconds')
                .setTimestamp()
            msg.channel.send(slowmodey)
            
        }
	},
};
