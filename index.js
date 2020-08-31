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

    if (member.guild.id == `717895996155101244`) {

        const channel = member.guild.channels.cache.find(ch => ch.name == 'welcome-goodbye');

        const welcomeembed = new Discord.MessageEmbed()
            .setColor("#53dc98")
            .setAuthor(member.user.tag, member.user.displayAvatarURL({format: 'png'}))
            .setTitle("***Welcome to " + member.guild.name + "!***")
            .setThumbnail(member.guild.iconURL({ format: 'png' }))
            .setDescription(`<@!${member.user.id}>, Welcome to this server! You're the ${member.guild.memberCount} member. Please check the <#717897434105118780> channel. Enjoy this server!`)
            .setTimestamp()

        channel.send(welcomeembed)

    } else if (member.guild.id == '737151735910629437') {

        const channel = member.guild.channels.cache.find(ch => ch.name == 'general-chat');

        const welcomeembed = new Discord.MessageEmbed()
            .setColor("#53dc98")
            .setAuthor(member.user.tag, member.user.displayAvatarURL({format: 'png'}))
            .setTitle("***Welcome to " + member.guild.name + "!***")
            .setThumbnail(member.guild.iconURL({ format: 'png' }))
            .setDescription(`<@!${member.user.id}>, Welcome to ${member.guild.name}! You're the ${member.guild.memberCount} member. Please check <#737152675161833552> and <#737152698016596058> channel. Enjoy this server!`)
            .setTimestamp()

        channel.send(welcomeembed)

    } else if (member.guild.id == '749595288280498188') {

        const channel = member.guild.channels.cache.find(ch => ch.name == 'traffic');

        const welcomeembed = new Discord.MessageEmbed()
            .setColor("#53dc98")
            .setAuthor(member.user.tag, member.user.displayAvatarURL({format: 'png'}))
            .setTitle(member.guild.name + "에 온 것을 환영합니다")
            .setThumbnail(member.guild.iconURL({ format: 'png' }))
            .setDescription(`<@!${member.user.id}>, ${member.guild.name}에 오신 것을 환영합니다! 당신은 ${member.guild.memberCount}번째 멤버입니다. <#749615913413640202> 채널을 확인해 주세요.`)
            .setTimestamp()

        channel.send(welcomeembed)

    } else {}

});

bot.on('guildMemberRemove', async member => {

    if (member.guild.id == `717895996155101244`) {

        let channel = member.guild.channels.cache.find(ch => ch.name == 'welcome-goodbye');

        let byeembed = new Discord.MessageEmbed()
            .setColor("#FF665B")
            .setAuthor(member.user.tag, member.user.displayAvatarURL({format: 'png'}))
            .setTitle(member.user.username + " left " + member.guild.name + ".")
            .setThumbnail(member.guild.iconURL({format: 'png'}))
            .setDescription(`<@!${member.user.id}> has left! Now we have ${member.guild.memberCount} members.`)
            .setTimestamp()

        channel.send(byeembed)

    } else if (member.guild.id == '737151735910629437') {

        let channel = member.guild.channels.cache.find(ch => ch.name == 'general-chat');

        let byeembed = new Discord.MessageEmbed()
            .setColor("#FF665B")
            .setAuthor(member.user.tag, member.user.displayAvatarURL({format: 'png'}))
            .setTitle(member.user.username + " left " + member.guild.name + ".")
            .setThumbnail(member.guild.iconURL({format: 'png'}))
            .setDescription(`<@!${member.user.id}> has left! Now we have ${member.guild.memberCount} members.`)
            .setTimestamp()

        channel.send(byeembed)

    } else if (member.guild.id == '749595288280498188') {

        let channel = member.guild.channels.cache.find(ch => ch.name == 'traffic');

        let byeembed = new Discord.MessageEmbed()
            .setColor("#FF665B")
            .setAuthor(member.user.tag, member.user.displayAvatarURL({format: 'png'}))
            .setTitle(member.user.username + "가 " + member.guild.name + "를 떠났습니다")
            .setThumbnail(member.guild.iconURL({format: 'png'}))
            .setDescription(`<@!${member.user.id}>가 떠났습니다. 남은 멤버는 ${member.guild.memberCount}명 입니다.`)
            .setTimestamp()

        channel.send(byeembed)

    } else {}

});

bot.on("ready", () =>{
    console.log("Logged in / Online in " + bot.guilds.cache.size + " servers.");
    bot.user.setActivity("e | &help", {type: "STREAMING", url: `https://www.twitch.tv/memeymandiscordbot`});
});

const guildprefix = mongoose.model('guildprefix', new mongoose.Schema({
    serverid: String,
    prefix: String
}));

global.guildprefix = guildprefix

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