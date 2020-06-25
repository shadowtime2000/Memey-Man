const Discord = require('discord.js');
module.exports = {
	name: 'disconnect',
	description: 'disconnect command',
	execute(msg, args) {
        if(!msg.author.voiceChannel.id) return msg.reply("You are not in a voice channel!")
        if(!msg.guild.me.voiceChannel.id) return msg.reply("I'm not in a voice channel!")
        if(msg.guild.me.voiceChannel.id == msg.author.voiceChannel.id){
            msg.guild.me.voiceChannel.leave(); 
        } else {
            msg.reply("You are not in the same voice channel with me!")
        }
    },
};