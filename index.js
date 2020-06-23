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

bot.on("guildCreate", guild => {
    const defaultChannel = guild.channels.cache.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
    defaultChannel.send("Thanks for adding me! Bot prefix is ``&``.")
});

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

    if(command == "kimjongun") {
        const canvas = Canvas.createCanvas(1280, 720);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./images/kimjongun.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(bot.users.cache.get(msg.author.id).displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 530, 100, 280, 280);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'kimjongun.jpg');

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
})

bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU");
