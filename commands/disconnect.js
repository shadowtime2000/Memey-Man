const Discord = require('discord.js');
module.exports = {
	name: 'disconnect',
	description: 'disconnect command',
	execute(msg, args) {
        if(!msg.member.voice.channel) return msg.reply("You are not in a voice channel!")
        if(!msg.guild.me.voice.channel) return msg.reply("I'm not in a voice channel!")
        if(msg.guild.me.voice.channel == msg.member.voice.channel){
            msg.guild.me.voice.channel.leave(); 
        } else {
            msg.reply("You are not in the same voice channel with me!")
        }
    },
};