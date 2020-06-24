const Discord = require('discord.js');
const ytdl = require('ytdl-core');
module.exports = {
	name: 'disconnect',
	description: 'disconnect command',
	execute(msg, args) {
        if (msg.guild.me.voiceChannel !== undefined) {
            msg.guild.me.voiceChannel.leave();
            message.reply("Left the voice channel.");
          } else {
            message.reply("I'm not connected to a voice channel!");
          }
    },
};