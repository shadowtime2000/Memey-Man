const Discord = require('discord.js');
const Enmap = require("enmap");
const fs = require('fs');

const bot = new Discord.Client();

bot.commands = new Enmap();

const talkedRecently = new Set();

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

    
    if (talkedRecently.has(msg.author.id) && command == `news`) return msg.reply(`You can use this command once every 10 minutes.`)

    if(command == `news`)
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
        talkedRecently.delete(msg.author.id);
        }, 10000);

    const cmd = bot.commands.get(command);
    if (cmd) {
      cmd.run(bot, msg, args);
    }
})

bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU");
