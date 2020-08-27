const Discord = require('discord.js');
const Enmap = require("enmap");
const fs = require('fs');
const mongoose = require('mongoose')

const bot = new Discord.Client();

bot.commands = new Enmap();

const conn = mongoose.connect(process.env.MONGODB,  { useNewUrlParser: true, useUnifiedTopology: true } )

mongoose.connection.on('connecting', function ()    { console.log('MongoDB: Trying to connect: ' + process.env.MONGODB);                             }); 
mongoose.connection.on('connected', function ()     { console.log('MongoDB: Successfully connected to: ' + process.env.MONGODB);          }); 
mongoose.connection.on('error', function (err)       { console.log('MongoDB: ERROR connecting to: ' + process.env.MONGODB + ' - ' + err);  }); 
mongoose.connection.on('close', function (err)       { console.log('MongoDB: Connection closed');                            }); 
mongoose.connection.on('reconnected', function ()   { console.log('MongoDB: Database link was reconnected');                });
mongoose.connection.on('disconnected', function ()  { console.log('MongoDB: The connection ended on: ' + process.env.MONGODB );                             });

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        bot.commands.set(commandName, props);
    });
});

const guildprefix = mongoose.model('guildprefix', new mongoose.Schema({
    serverid: String,
    prefix: String
}));

bot.on("ready", () =>{
    console.log("Logged in / Online in " + bot.guilds.cache.size + " servers.");
    bot.user.setActivity("e | &help", {type: "STREAMING", url: `https://www.twitch.tv/memeymandiscordbot`});
});

bot.on("message", async msg => {

    const prefixmap = await guildprefix.findOne({ serverid: msg.guild.id }) || { prefix: "&" }
    let prefix = prefixmap.prefix
    global.prefix = prefix

    if (msg.author.bot) return;
    if (msg.content.indexOf(prefix) !== 0) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command);

    if (msg.content == "<@!702068724957446145>") {

        msg.reply(`My prefix is ${prefix}`)
        
    } else if (command.startsWith("prefix")) {

        const args = msg.content.split(' ').slice(1); 
        const newprefix = args.join(' '); 

        if(!newprefix) return msg.channel.send("Current prefix is ``"+ prefix + "``")

        if(!msg.member.hasPermission("MANAGE_GUILD")) return msg.channel.send("Missing permissions")

        const test = await guildprefix.findOne({ serverid: msg.guild.id })

        if (test == null) {
            await new guildprefix({ serverid: msg.guild.id, prefix: newprefix }).save();
        } else {
            await guildprefix.updateOne({ serverid: msg.guild.id }, { prefix: newprefix });
        }

        const setprefix = await guildprefix.findOne({ serverid: msg.guild.id })

        const prefixembed = new Discord.MessageEmbed()
            .setColor(`#0859C6`)
            .setTitle(`Successfully set prefix`)
            .setDescription("The new prefix is ``" + setprefix.prefix + "``")

        msg.channel.send(prefixembed)

    } else if (msg.content == "&prefixtesting") {

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