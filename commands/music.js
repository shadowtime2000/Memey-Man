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

            const songInfo = ytdl.getInfo(musicurl);
            const title = songInfo.title

            msg.reply(`Playing ${title} now!`)

            voiceChannel.join().then(connection => {
                const stream = ytdl(musicurl, { filter: 'audioonly' });
                const dispatcher = connection.play(stream);

                dispatcher.on('end', () => bot.leaveVoiceChannel(msg.member.voiceState.channelID));
            })
            .catch(() => msg.reply(`Couldn't play music. Check if your link is valid youtube link!`));
    },
};