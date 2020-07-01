const Discord = require('discord.js');
const Enmap = require("enmap");
const fs = require('fs');

const bot = new Discord.Client();

const youtube = new YouTube("AIzaSyDTOmYVyZvnv7gSXM2TiHVH6FCSC9uqFCw");

bot.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    bot.commands.set(commandName, props);
  });
});

bot.on("ready", () =>{
    bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU")
    console.log('Logged in!');
    console.log("The bot is online in " + bot.guilds.cache.size + " servers.");
    bot.user.setActivity("you | &help", {type: "WATCHING"});
});

var prefix = "&"

bot.on("message", async msg => {

    if (msg.author.bot) return;
    if (msg.content.indexOf(prefix) !== 0) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = bot.commands.get(command);
    if (!cmd) return;
    cmd.run(bot, msg, args);

    // if(command.startsWith("play")) {
    //     if (msg.channel.type !== 'text') return;

    //     const voiceChannel = msg.member.voice.channel;

    //     const args1 = msg.content.split(' ').slice(1); 
    //     const musicurl = args1.join(' '); 

    //     const nosong = new Discord.MessageEmbed()
    //         .setColor('#505050')
    //         .setTitle('Play command')
    //         .setDescription('Usage: &play [YouTube link or keyword]')

    //     const novc = new Discord.MessageEmbed()
    //         .setColor('#505050')
    //         .setTitle('Join a voice channel first!')
    //         .setDescription('You have to join a voice channel before playing music.')

    //     if(!musicurl) return msg.channel.send(nosong)

    //     if(msg.guild.me.voice.channel != msg.member.voice.channel && msg.guild.me.voice.channel) return msg.reply("You are not in the same voice channel with me!")

    //     if(ytdl.validateURL(musicurl) == false) {

    //         const music = encodeURI(musicurl);

    //         let result

    //         try {
    //             result = await youtube.searchVideos(music);
    //         } catch (error) {
    //             msg.channel.send(`:x: No results found. This might be an error.`)
    //             console.log(error)
    //         }

    //         const songInfo = await ytdl.getInfo(result.url);
    //         const song = {
    //             title: songInfo.title,
    //             url: songInfo.video_url,
    //             duration: songInfo.length_seconds
    //         }; 

    //         if(!result) return msg.channel.send(":x: No results found.")

    //         var minute = parseInt(song.duration / 60); 
    //         var second = song.duration % 60;

    //         const playing = new Discord.MessageEmbed()
    //             .setColor('#505050')
    //             .setTitle('Playing music!')
    //             .setDescription(`Playing **${song.title}** now! :notes:`)
    //             .setFooter(`Song duration: ${minute} minutes ${second} seconds`)

    //         voiceChannel.join().then(connection => {
    //             const stream = ytdl(result.url, { filter: 'audioonly' });
    //             const dispatcher = connection.play(stream);
    //             msg.channel.send(playing)
    
    //             dispatcher.on('finish', () => 
    //             voiceChannel.leave()
    //             );
    //         })  
            
    //     }
        
    //     else {

    //         if (!voiceChannel) return msg.channel.send(novc);

    //         const songInfo = await ytdl.getInfo(musicurl);
    //         const song = {
    //         title: songInfo.title,
    //         url: songInfo.video_url,
    //         duration: songInfo.length_seconds
    //         };

    //         var minute = parseInt(song.duration / 60); 
    //         var second = song.duration % 60;

    //         const playing = new Discord.MessageEmbed()
    //             .setColor('#505050')
    //             .setTitle('Playing music!')
    //             .setDescription(`Playing **${song.title}** now! :notes:`)
    //             .setFooter(`Song duration: ${minute} minutes ${second} seconds`)

    //         voiceChannel.join().then(connection => {
    //             const stream = ytdl(musicurl, { filter: 'audioonly' });
    //             const dispatcher = connection.play(stream);
    //             msg.channel.send(playing)

    //             dispatcher.on('finish', () => 
    //             voiceChannel.leave()
    //             );
    //     })        
    // }}
})

bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU");
