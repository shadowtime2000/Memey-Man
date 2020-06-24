const ytdl = require('ytdl-core');
module.exports = {
	name: 'music',
	description: 'music command',
	execute(msg, args) {
            if (msg.channel.type !== 'text') return;

            const args1 = msg.content.split(' ').slice(1); 
            const musicurl = args1.join(' '); 

            const voiceChannel = msg.member.voice.channel;

            if (!voiceChannel) {
                return message.reply('Please join a voice channel!');
            }

            voiceChannel.join().then(connection => {
                const stream = ytdl(musicurl, { filter: 'audioonly' });
                const dispatcher = connection.play(stream);

                dispatcher.on('end', () => voiceChannel.leave());
        });
    },
};