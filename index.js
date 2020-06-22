const Discord = require('discord.js');
const Canvas = require('canvas');
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

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

    //Command handler start
    if(command == "dog") {
        bot.commands.get('dog').execute(msg, args);
    }
    if(command == "cat") {
        bot.commands.get('cat').execute(msg, args);
    }
    if(command == "fox") {
        bot.commands.get('fox').execute(msg, args);
    }
    if(command == "meme") {
        bot.commands.get('meme').execute(msg, args);
    }
    if(command == "invite") {
        bot.commands.get('invite').execute(msg, args);
    }
    if(command == "xue") {
        bot.commands.get('xue').execute(msg, args);
    }
    if(command == "botinfo") {
        bot.commands.get('botinfo').execute(msg, args);
    }
    if(command == "topic") {
        bot.commands.get('topic').execute(msg, args);
    }
    if(command == "diceroll") {
        bot.commands.get('diceroll').execute(msg, args);
    }
    if(command == "coinflip") {
        bot.commands.get('coinflip').execute(msg, args);
    }
    if(command == "help") {
        bot.commands.get('help').execute(msg, args);
    }
    if(command == "serverinfo") {
        bot.commands.get('serverinfo').execute(msg, args);
    }
    if(command.startsWith("8ball")) {
        bot.commands.get('8ball').execute(msg, args);
    }
    if(command.startsWith("embed")) {
        bot.commands.get('embed').execute(msg, args);
    }
    if(command.startsWith("slowmode")) {
        bot.commands.get('slowmode').execute(msg, args);
    }
    if(command.startsWith("purge")) {
        bot.commands.get('purge').execute(msg, args);
    }
    if(command.startsWith("urban")) {
        bot.commands.get('urban').execute(msg, args);
    }
    if(command.startsWith("punch")) {
        bot.commands.get('punch').execute(msg, args);
    }
    if(command.startsWith("hug")) {
        bot.commands.get('hug').execute(msg, args);
    }
    //Command handler end

    if(command == "ping") {
        const m = await msg.channel.send("Pong:");
        m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
    }

    if(command.startsWith("repeat")) {
        const user = msg.mentions.members.first();
        const args1 = msg.content.split(' ').slice(1);
        var repeatword = args1.join(' ')
        if(!repeatword) return msg.reply('Nothing to repeat!');
        if(repeatword.includes("&kick")) return msg.reply("Don't try it!")
        if(repeatword.includes("&ban")) return msg.reply("Don't try it!")
        if(repeatword.includes("&purge")) return msg.reply("Don't try it!")   
        if(repeatword.includes("&slowmode")) return msg.reply("Don't try it!")  
        if(repeatword.includes("&vote")) return msg.reply("Don't try it!")  
        if(repeatword.includes("@everyone")) return msg.reply("Don't try it!")
        if(repeatword.includes("@here")) return msg.reply("Don't try it!")
        if(user) return msg.channel.send("I can't mention user!")
        var repeatword = repeatword.replace(/@&|@!/g, "**Non-ping:** ")
        msg.channel.send(repeatword)
    }

    if(command == "amiajoke") {
        const canvas = Canvas.createCanvas(897, 601);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./amiajoke.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 480, 50, 330, 330);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'amiajoke.jpg');

        msg.channel.send(attachment)
    }

    if(command == "kimjongun") {
        const canvas = Canvas.createCanvas(1280, 720);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./kimojongun.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 640, 50, 200, 200);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'kimjongun.jpg');

        msg.channel.send(attachment)
    }

    if(command == "nou") {
        const canvas = Canvas.createCanvas(640, 454);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./nou.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 37, 80, 200, 200);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'nou.jpg');

        msg.channel.send(attachment)
    }

    if(command == "pogchamp") {
        const canvas = Canvas.createCanvas(700, 394);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./pogchamp.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 270, 100, 170, 170);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'pogchamp.jpg');

        msg.channel.send(attachment)
    }

    if(command.startsWith('avatar')) {
        var user = msg.mentions.members.first()
        const arguments = msg.content.split(' ').slice(1); 
        const memberid = arguments.join(' '); 
        if(!memberid && !user) {
            const avatarEmbed = new Discord.MessageEmbed()
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(msg.author.id).tag, bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }))
                .setImage(msg.author.displayAvatarURL({ format: 'png' }));
            msg.channel.send(avatarEmbed);
        }
        if(user) {
            const useravatarEmbed = new Discord.MessageEmbed()            
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(user.id).tag, bot.users.cache.get(user.id).displayAvatarURL({ format: 'png' }))
                .setImage(bot.users.cache.get(user.id).displayAvatarURL({ format: 'png' }));
            msg.channel.send(useravatarEmbed);
        }
        if(memberid && !user && msg.guild.member(memberid)) {
            const idavatarEmbed = new Discord.MessageEmbed() 
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(memberid).tag, bot.users.cache.get(memberid).displayAvatarURL({ format: 'png' }))
                .setImage(bot.users.cache.get(memberid).displayAvatarURL({ format: 'png' }));
            msg.channel.send(idavatarEmbed);
        } 
        if(memberid && !user && !msg.guild.member(memberid) ) return msg.channel.send(":x: No results found.")

    }

    if(command.startsWith("vote")) {

        const noperm = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle("Oops!")
            .setDescription("You can't use that command!")

        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(noperm)

        const noembed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle("Vote command")
            .setDescription("Usage: &vote [channel mention] [vote title]")

        const args = msg.content.split(' ').slice(2); 
        const votetitle = args.join(' '); 
        let mention = msg.mentions.channels.first();
        if(!mention) return msg.channel.send(noembed)
        if(!votetitle) return msg.channel.send(noembed)

        const voteEmbed = new Discord.MessageEmbed()
            .setColor(`#FFC0CB`)
            .setTitle( "**Vote**: " + votetitle )
            .setDescription("React to vote!")
            .setFooter("Vote created by " + msg.member.displayName)
            .setTimestamp()

        bot.channels.cache.get(mention.id).send(voteEmbed).then(sentEmbed => {
            sentEmbed.react("👍")
            .then(() => sentEmbed.react("👎"))
            msg.react('✅')
        });
    }

    if(command.startsWith('kick')) {

        if (msg.channel.type == "dm") return;

        const args = msg.content.split(' ').slice(2); 
        const kickreason = args.join(' '); 
        var mem= msg.mentions.members.first();

        const noperm = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("You can't use that command!")
        
        const nomemmber = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give a member to kick!")

        const noreason = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a reason!")

        const cantkick = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("An errror occurred.")

            if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm);
            if(!mem) return msg.channel.send(nomemmber)
            if(!kickreason) return msg.channel.send(noreason)
            
            const kickembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('**Successfully kicked member**')
                .setDescription( `**Kicked ${mem.displayName}.**` + '\n**Moderator**: ' + msg.member.displayName + '\n**Reason**: ' + kickreason )
                .setTimestamp()

            const dmkickembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`**You have been kicked from ${msg.guild.name}**`)
                .setDescription( '**Moderator**: ' + msg.member.displayName + '\n**Reason**: ' + kickreason )
                .setTimestamp()

            mem.send(dmkickembed)
            .then(() => {
                mem.kick().then((member) => {
                msg.channel.send(kickembed)
                })
            }).catch(() => {
                msg.channel.send(cantkick);
        });
    }

    if(command.startsWith('ban')) {

        if (msg.channel.type == "dm") return;

        const args = msg.content.split(' ').slice(2); 
        const banreason = args.join(' '); 
        var mem1= msg.mentions.members.first();

        const noperm1 = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("You can't use that command!")

        const nomemberembed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a member to ban!")

        const noreasonembed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a reason!")

        const cantban = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("An error occurred.")

            if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(noperm1)
            if(!mem1) return msg.channel.send(nomemberembed)
            if(!banreason) return msg.channel.send(noreasonembed)

            const banembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('**Successfully banned member**')
                .setDescription( `**Banned ${mem1.displayName}.**` + '\n**Moderator**: ' + msg.member.displayName + '\n**Reason**: ' + banreason )
                .setTimestamp()

            const dmbanembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`**You have been banned from ${msg.guild.name}**`)
                .setDescription( '**Moderator**: ' + msg.member.displayName + '\n**Reason**: ' + banreason )
                .setTimestamp()

            mem1.send(dmbanembed)
            .then(() => {
                mem1.ban().then((member) => {
                msg.channel.send(banembed)
                })
            }).catch(() => {
                msg.channel.send(cantban);
        });
    }
})

bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU");