const Discord = require('discord.js');
exports.run = (bot, msg, args) => {
        let user = msg.mentions.members.first();

        const spanke = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Invalid argument')
            .setDescription('You didn\'t provide a member to punch.')

        if (!user) return msg.channel.send(spanke)

        const hitee = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle( msg.member.displayName + " :right_facing_fist: " + user.displayName)
            .setDescription( msg.author.toString() + ' punched ' + user.toString() + "!" )
        msg.channel.send(hitee)
};