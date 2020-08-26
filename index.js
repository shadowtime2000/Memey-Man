const Discord = require('discord.js');
const Enmap = require("enmap");
const fs = require('fs');
const mongoose = require('mongoose')

const bot = new Discord.Client();

bot.commands = new Enmap();

mongoose.connect(process.env.MONGODB,  { useNewUrlParser: true, useUnifiedTopology: true } )

mongoose.connection.on('connecting', function ()    { console.log('MongoDB: Trying to connect: ' + dbURI);                             }); 
mongoose.connection.on('connected', function ()     { console.log('MongoDB: Successfully connected to: ' + dbURI);          }); 
mongoose.connection.on('error', function (err)       { console.log('MongoDB: ERROR connecting to: ' + dbURI + ' - ' + err);  }); 
mongoose.connection.on('close', function (err)       { console.log('MongoDB: Connection closed');                            }); 
mongoose.connection.on('reconnected', function ()   { console.log('MongoDB: Database link was reconnected');                });
mongoose.connection.on('disconnected', function ()  { console.log('MongoDB: The connection ended on: ' + dbURI );                             });

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        bot.commands.set(commandName, props);
    });
});

const prefix = "&" 

bot.on("ready", () =>{
    console.log("Logged in / Online in " + bot.guilds.cache.size + " servers.");
    bot.user.setActivity("e | &help", {type: "STREAMING", url: `https://www.twitch.tv/memeymandiscordbot`});
});

bot.on("message", async msg => {

    if (msg.author.bot) return;
    if (msg.content.indexOf(prefix) !== 0) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command);

    if (command == "prefix") {
        const args = msg.content.split(' ').slice(1); 
        const newprefix = args.join(' '); 
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