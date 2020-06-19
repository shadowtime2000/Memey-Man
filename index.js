const Discord = require('discord.js');
const fetch = require('node-fetch');
const urban = require('urban')
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
    if(command.startsWith("8ball")) {
        bot.commands.get('8ball').execute(msg, args);
    }
    if(command.startsWith("embed")) {
        bot.commands.get('embed').execute(msg, args);
    }
    if(command.startsWith("slowmode")) {
        bot.commands.get('slowmode').execute(msg, args);
    }

    if(msg.content == prefix + "ping") {
        const m = await msg.channel.send("Pong:");
        m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
    }

    if(msg.content.startsWith(prefix + "repeat")) {
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


    if(msg.content.startsWith(prefix + 'avatar')) {
        var user = msg.mentions.members.first()
        const arguments = msg.content.split(' ').slice(1); 
        const memberid = arguments.join(' '); 
        if(!memberid && !user) {
            const avatarEmbed = new Discord.MessageEmbed()
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(msg.author.id).tag, bot.users.cache.get(msg.author.id).displayAvatarURL())
                .setImage(msg.author.displayAvatarURL());
            msg.channel.send(avatarEmbed);
        }
        if(user) {
            const useravatarEmbed = new Discord.MessageEmbed()            
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(user.id).tag, bot.users.cache.get(user.id).displayAvatarURL())
                .setImage(bot.users.cache.get(user.id).displayAvatarURL());
            msg.channel.send(useravatarEmbed);
        }
        if(memberid && !user && msg.guild.member(memberid)) {
            const idavatarEmbed = new Discord.MessageEmbed() 
                .setColor(`#006a4e`)
                .setAuthor(bot.users.cache.get(memberid).tag, bot.users.cache.get(memberid).displayAvatarURL())
                .setImage(bot.users.cache.get(memberid).displayAvatarURL());
            msg.channel.send(idavatarEmbed);
        } 
        if(memberid && !user && !msg.guild.member(memberid) ) return msg.channel.send(":x: No results found.")

    }

    if(msg.content.startsWith(prefix + "vote")) {

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

    if(msg.content.startsWith(prefix + 'purge')) {	

        if (msg.channel.type == "dm") return;

        const nopurge = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("You can't use that command!")

        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(nopurge);
        const args = msg.content.split(' ').slice(1); 
        const amount = args.join(' '); 
        const extranum = "1"
        const amountaa = parseInt(amount)
        const extranumaa = parseInt(extranum)
        const messageamount = amountaa + extranumaa

        if (!amount) return msg.reply('Tell me how many messages should I purge!'); 
        if (isNaN(amount)) return msg.reply('Give me a number!'); 

        if (amount > 99) return msg.reply("Too many messages to purge! Give me a smaller number."); 
        if (amount < 1) return msg.reply("You can't purge less than 1 message! Give me a bigger number."); 
        
        msg.channel.messages.fetch({ limit: messageamount }).then(messages => {
            msg.channel.bulkDelete(messages 

        )});	
    
    }

    if(msg.content.startsWith(prefix + 'punch')) {
        var member= msg.mentions.members.first();
        const spanke = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Punch command')
            .setDescription('Usage: &punch [member mention]')
        if (!member) return msg.channel.send(spanke)
        const hitee = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle( msg.member.displayName + " :right_facing_fist: " + member.displayName)
            .setDescription( msg.author.toString() + ' punched ' + member.toString() + "!" )
        msg.channel.send(hitee)
    }

    if(msg.content.startsWith(prefix + 'hug')) {
        var member= msg.mentions.members.first();
        const huge = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Hug command')
            .setDescription('Usage: &hug [member mention]')
        if (!member) return msg.channel.send(huge)
        const hugee = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle( msg.member.displayName + " :hugging: " + member.displayName )
            .setDescription( msg.author.toString() + ' hugged ' + member.toString() + "!" )
        msg.channel.send(hugee)
    }

    if(msg.content.startsWith(prefix + 'kick')) {

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

    if(msg.content.startsWith(prefix + 'ban')) {

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

    // if (msg.content.startsWith(prefix + 'slowmode')) {

    //     if (msg.channel.type == "dm") return;

    //     const noperm1 = new Discord.MessageEmbed()
    //         .setColor('#FFFF00')
    //         .setTitle('Oops!')
    //         .setDescription("You can't use that command!")

    //     const nonum = new Discord.MessageEmbed()
    //         .setColor('#FFFF00')
    //         .setTitle('Oops!')
    //         .setDescription("Number should be less than or equal to 21600.")

    //     if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send(noperm1)

    //     var str = msg.content.split(prefix + 'slowmode ');
    //     var num = parseInt(str[1], 10);
    //     if(num > 21600) return msg.channel.send(nonum)
    //     if(!num) {
    //         msg.channel.setRateLimitPerUser(num)
    //         const slowmodeoff = new Discord.MessageEmbed()
    //             .setColor('#EE0000')
    //             .setTitle("Successfully turned off slowmode")
    //             .setDescription(`Turned off slowmode.`)
    //             .setTimestamp()
    //         msg.channel.send(slowmodeoff)
    //     }
    //     else {
    //         msg.channel.setRateLimitPerUser(num).then(() => {
    //         const slowmode = new Discord.MessageEmbed()
    //             .setColor('#EE0000')
    //             .setTitle("Successfully set slowmode")
    //             .setDescription(`Slowmode set to ${num}s.`)
    //             .setTimestamp()
    //         msg.channel.send(slowmode)
            
    //         });
    //     }
    // }
    
    if(msg.content.startsWith(prefix + 'urban')) {
        const args = msg.content.split(' ').slice(1); 
        const searchword = args.join(' '); 
        const noword = new Discord.MessageEmbed()
            .setColor('#ffa000')
            .setTitle('Urban command')
            .setDescription('Usage: &urban [word]')
        const toolong = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Oops!')
            .setDescription("Definition is too long. Can't send message because of discord embed character limit.")
        if(!searchword) return msg.channel.send(noword);
        
        let image = "https://i.imgur.com/RFm5zMt.png";
        let search = urban(searchword)
            try {
                search.first(res => {
                    if(!res) return msg.channel.send(":x: No results found.");
                    let { word, definition, example } = res;
                        
                        let embed = new Discord.MessageEmbed()
                            .setColor('#ffa000')
                            .setAuthor(`Urban Dictionary | ${word}`, image )
                            .setDescription(`**Defintion:** ${definition || "No definition"}\n**Example:** ${example || "No Example"}`)
                            //.setTimestamp()
                            if( definition.length + word.length + example.length + 22 > 2048 ) return msg.channel.send(toolong)
                            msg.channel.send(embed)                   
                })
            } catch(e) {
                return msg.channel.send("Error")
            }
        }
})

bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU");