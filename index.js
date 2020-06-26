const Discord = require('discord.js');
const Canvas = require('canvas');
const ytdl = require('ytdl-core');
const YouTube = require("discord-youtube-api");
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const queue = new Map();

const youtube = new YouTube("AIzaSyDTOmYVyZvnv7gSXM2TiHVH6FCSC9uqFCw");

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on("ready", () =>{
    bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU")
    console.log('Logged in!');
    console.log("The bot is online in " + bot.guilds.cache.size + " servers.");
    bot.user.setActivity("you | &help", {type: "WATCHING"});
});

var prefix = "&"

bot.on("message", async msg => {

    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (bot.commands.has(command)) {
        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            console.log(error);
            msg.reply('There was an error executing that command.');
        }
    }

    //Additional command handler start
	if (command === 'dc') {
        bot.commands.get('disconnect').execute(msg, args);
    }
    //Additional command handler end

    if(command == "ping") {
        const m = await msg.channel.send("Pong:");
        m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
    }

    if(command == "amiajoke") {
        const canvas = Canvas.createCanvas(897, 601);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./images/amiajoke.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 480, 50, 330, 330);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'amiajoke.jpg');

        msg.channel.send(attachment)
    }

    if(command == "russia") {
        const canvas = Canvas.createCanvas(608, 342);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./images/russia.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 430, 122, 70, 70);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'russia.jpg');

        msg.channel.send(attachment)
    }

    if(command == "nou") {
        const canvas = Canvas.createCanvas(640, 454);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./images/nou.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 37, 80, 200, 200);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'nou.jpg');

        msg.channel.send(attachment)
    }

    if(command == "pogchamp") {
        const canvas = Canvas.createCanvas(700, 394);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./images/pogchamp.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 270, 100, 170, 170);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'pogchamp.jpg');

        msg.channel.send(attachment)
    }

    if(command == "ussr") {
        const canvas = Canvas.createCanvas(855, 481);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./images/ussr.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 550, 260, 50, 50);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'ussr.jpg');

        msg.channel.send(attachment)
    }

    if(command.startsWith('avatar')) {
        var user = msg.mentions.members.first()
        const arguments = msg.content.split(' ').slice(1); 
        const memberid = arguments.join(' '); 
        if(!memberid && !user) {
            const avatarEmbed = new Discord.MessageEmbed()
                .setColor(`#006a4e`)
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ format: 'png' }))
                .setImage(msg.author.displayAvatarURL({ size: 1024, format: 'png' }));
            msg.channel.send(avatarEmbed);
        }
        if(user) {
            const useravatarEmbed = new Discord.MessageEmbed()            
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(user.id).tag, bot.users.cache.get(user.id).displayAvatarURL({ format: 'png' }))
                .setImage(bot.users.cache.get(user.id).displayAvatarURL({ size: 1024, format: 'png' }));
            msg.channel.send(useravatarEmbed);
        }
        if(memberid && !user && msg.guild.member(memberid)) {
            const idavatarEmbed = new Discord.MessageEmbed() 
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(memberid).tag, bot.users.cache.get(memberid).displayAvatarURL({ format: 'png' }))
                .setImage(bot.users.cache.get(memberid).displayAvatarURL({ size: 1024, format: 'png' }));
            msg.channel.send(idavatarEmbed);
        } 
        if(memberid && !user && !msg.guild.member(memberid) ) return msg.channel.send(":x: No results found.")

    }

    if(command.startsWith("play")) {
        if (msg.channel.type !== 'text') return;

        const voiceChannel = msg.member.voice.channel;

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
                msg.channel.send(`:x: No results found. This might be an error.`)
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

            if (!voiceChannel) return msg.channel.send(novc);

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
    }}

    if(command == "giverole"){
        const user = msg.mentions.members.first()
        user.roles.add(`681789139393445899`);
    }

    if(command.startsWith("send")){
        if(msg.author.id != "611396886418685982") return;
        const args1 = msg.content.split(' ').slice(2); 
        const amount = args1.join(' '); 
        let mention = msg.mentions.channels.first();
        mention.send(amount)
    }
})

bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU");
