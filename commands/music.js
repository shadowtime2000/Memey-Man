const ytdl = require('ytdl-core');
module.exports = {
	name: 'youtube',
	description: 'youtube command',
	execute(msg, args) {
            if (msg.channel.type !== 'text') return;

            const args1 = msg.content.split(' ').slice(1); 
            const musicurl = args1.join(' '); 

            if(!musicurl) { 
                const nosong = new Discord.MessageEmbed()
                    .setColor('#505050')
                    .setTitle('Youtube command')
                    .setDescription('Usage: &youtube [youtube link]')
                msg.channel.send(nosong)
                return;
            }

            const voiceChannel = msg.member.voice.channel;

            if (!voiceChannel) return msg.reply('Please join a voice channel!');

            voiceChannel.join().then(connection => {
                const stream = ytdl(musicurl, { filter: 'audioonly' });
                const dispatcher = connection.play(stream);
                msg.reply(`Playing music now!`)

                dispatcher.on('end', () => bot.leaveVoiceChannel(msg.member.voiceState.channelID));
            })
            process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
    },
};