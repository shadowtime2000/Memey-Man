const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const youtubeapi = require('discord-youtube-api');
exports.run = async (bot, msg, args) => {

        const youtube = new youtubeapi("AIzaSyDTOmYVyZvnv7gSXM2TiHVH6FCSC9uqFCw");

        if (msg.channel.type !== 'text') return;

        const voiceChannel = msg.member.voice.channel;

        if (!voiceChannel) return msg.channel.send(novc);

        const args1 = msg.content.split(' ').slice(1); 
        const musicurl = args1.join(' '); 

        const nosong = new Discord.MessageEmbed()
            .setColor('#505050')
            .setTitle('Play command')
            .setDescription('Usage: &play [YouTube link or keyword]')

        const novc = new Discord.MessageEmbed()
            .setColor('#505050')
            .setTitle('Join a voice channel first!')
            .setDescription('You have to join a voice channel before playing music.')

        if(!musicurl) return msg.channel.send(nosong)

        if(msg.guild.me.voice.channel != msg.member.voice.channel && msg.guild.me.voice.channel) return msg.reply("You are not in the same voice channel with me!")

        if(ytdl.validateURL(musicurl) == false) {

            const music = encodeURI(musicurl);

            let result

            try {
                result = await youtube.searchVideos(music);
            } catch (error) {
                msg.channel.send(`:x: No results found.`)
                console.log(error)
            }

            const songInfo = await ytdl.getInfo(result.url);
            const song = {
                title: songInfo.title,
                url: songInfo.video_url,
                duration: songInfo.length_seconds
            }; 

            if(!result) return msg.channel.send(":x: No results found.")

            var minute = parseInt(song.duration / 60); 
            var second = song.duration % 60;

            const playing = new Discord.MessageEmbed()
                .setColor('#505050')
                .setTitle('Playing music!')
                .setDescription(`Playing **${song.title}** now! :notes:`)
                .setFooter(`Song duration: ${minute} minutes ${second} seconds`)

            voiceChannel.join().then(connection => {
                const stream = ytdl(result.url, { filter: 'audioonly' });
                const dispatcher = connection.play(stream);
                msg.channel.send(playing)

                dispatcher.on('finish', () => 
                voiceChannel.leave()
                );
            })  
            
        }
        
        else {

            const songInfo = await ytdl.getInfo(musicurl);
            const song = {
            title: songInfo.title,
            url: songInfo.video_url,
            duration: songInfo.length_seconds
            };

            var minute = parseInt(song.duration / 60); 
            var second = song.duration % 60;

            const playing = new Discord.MessageEmbed()
                .setColor('#505050')
                .setTitle('Playing music!')
                .setDescription(`Playing **${song.title}** now! :notes:`)
                .setFooter(`Song duration: ${minute} minutes ${second} seconds`)

            voiceChannel.join().then(connection => {
                const stream = ytdl(musicurl, { filter: 'audioonly' });
                const dispatcher = connection.play(stream);
                msg.channel.send(playing)

                dispatcher.on('finish', () => 
                voiceChannel.leave()
                );
        })        
    }
};