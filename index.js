const Discord = require('discord.js');
const Enmap = require("enmap");
const fs = require('fs');
const db = require('quick.db');

const bot = new Discord.Client();

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
    console.log("Logged in / Online in " + bot.guilds.cache.size + " servers.");
    bot.user.setActivity("e | &help", {type: "STREAMING", url: `https://www.twitch.tv/memeymandiscordbot`});
});

db.set('prefixlist', { difficulty: 'Easy' })

bot.on("message", async msg => {

    var serverid = msg.guild.id

    var serverprefix

    var serverprefixarray = db.get(`prefixlist.${serverid}`)

    if(!serverprefixarray) {
        
        db.push(`prefixlist.${serverid}`, `&`)

    } 

    var serverprefixarray = db.get(`prefixlist.${serverid}`)

    serverprefix = serverprefixarray[0]

    var prefix = serverprefix

    if (msg.author.bot) return;
    if (msg.content.indexOf(prefix) !== 0) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command);

    if (command == "prefix") {

        const arguments = msg.content.split(' ').slice(1); 
        const newprefix = arguments.join(' '); 

        if(!newprefix) return msg.channel.send("Current prefix is " + db.get(`${prefix}`))

        try {

            db.delete(`prefixlist.${serverid}`)
            db.push(`prefixlist.${serverid}`, newprefix)
            msg.channel.send(`Set prefix to ${newprefix}`)

        } catch(error) {

            console.log(error)
            msg.channel.send("Error.")

        }

    } else if (cmd) {

        cmd.run(bot, msg, args);

    }

})

bot.login(process.env.TOKEN);