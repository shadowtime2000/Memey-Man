const Discord = require('discord.js');
const ytdl = require('ytdl-core');
module.exports = {
	name: 'youtube',
	description: 'youtube command',
	execute(msg, args) {
            if (msg.channel.type !== 'text') return;

            const args1 = msg.content.split(' ').slice(1); 
            const musicurl = args1.join(' '); 

            const nosong = new Discord.MessageEmbed()
                .setColor('#505050')
                .setTitle('Youtube command')
                .setDescription('Usage: &youtube [youtube link]')

            const playing = new Discord.MessageEmbed()
                .setColor('#505050')
                .setTitle('Playing music now!')
                .setDescription('Now listen to the music! :notes:')

            const novc = new Discord.MessageEmbed()
                .setColor('#505050')
                .setTitle('Join a voice channel!')
                .setDescription('You have to join a music channel before playing music.')

            if(!musicurl) return msg.channel.send(nosong)

            const voiceChannel = msg.member.voice.channel;

            if (!voiceChannel) return msg.channel.send(novc);

            voiceChannel.join().then(connection => {
                const stream = ytdl(musicurl, { filter: 'audioonly' });
                const dispatcher = connection.play(stream);
                msg.channel.send(playing)

                dispatcher.on('end', () => msg.guild.me.voiceChannel.leave());
            })
    },
};