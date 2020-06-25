const Discord = require('discord.js');
module.exports = {
	name: 'disconnect',
	description: 'disconnect command',
	execute(msg, args) {
        if(!msg.author.voiceChannel) return msg.reply("You are not in a voice channel!")
        if(!msg.guild.me.voiceChannel) return msg.reply("I'm not in a voice channel!")
        if(msg.guild.me.voiceChannel == msg.author.voiceChannel){
            msg.guild.me.voiceChannel.leave(); 
        } else {
            msg.reply("You are not in the same voice channel with me!")
        }
    },
};