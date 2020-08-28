const Discord = require('discord.js');
const Enmap = require("enmap");
const fs = require('fs');
const Canvas = require('canvas')
const mongoose = require('mongoose')

global.mongoose = mongoose

const bot = new Discord.Client();

bot.commands = new Enmap();

mongoose.connect(process.env.MONGODB,  { useNewUrlParser: true, useUnifiedTopology: true } )

mongoose.connection.on('connecting', function () { console.log('MongoDB: Trying to connect to MongoDB');});
mongoose.connection.on('connected', function () { console.log('MongoDB: Successfully connected to MongoDB');});
mongoose.connection.on('error', function (err) { console.log('MongoDB: ERROR connecting to MongoDB' + ' - ' + err);  });
mongoose.connection.on('close', function (err) { console.log('MongoDB: Connection closed');});
mongoose.connection.on('reconnected', function () { console.log('MongoDB: Database link was reconnected');});
mongoose.connection.on('disconnected', function () { console.log('MongoDB: Connection ended');});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        bot.commands.set(commandName, props);
    });
});

bot.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/wallpaper.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

    channel.send(`Welcome to the server, ${member}!`, attachment);
});

bot.on("ready", () =>{
    console.log("Logged in / Online in " + bot.guilds.cache.size + " servers.");
    bot.user.setActivity("e | &help", {type: "STREAMING", url: `https://www.twitch.tv/memeymandiscordbot`});
});

bot.on("message", async msg => {

    const prefixmap = await guildprefix.findOne({ serverid: msg.guild.id }) || { prefix: "&" }
    let prefix = prefixmap.prefix
    global.prefix = prefix

    if (msg.author.bot) return;

    if (msg.content == "<@!702068724957446145>") {

        msg.reply(`My prefix is ${prefix}`)
        
    }

    if (msg.content.indexOf(prefix) !== 0) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command);

    if (msg.content == "&prefixtesting") {

        const e = await guildprefix.findOne({ serverid: msg.guild.id })
        console.log(e)

    } else if (cmd) {
        try {
            cmd.run(bot, msg, args);
        } catch (error) {
            console.log(error)
            msg.channel.send("An error occurred while running command.")
        }
    }
})

bot.login(process.env.TOKEN);