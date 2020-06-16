const Discord = require('discord.js');
const fetch = require('node-fetch');
const urban = require('urban')
const bot = new Discord.Client();

bot.on("ready", () =>{
    bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU")
    console.log('Logged in!');
    console.log("The bot is online in " + bot.guilds.cache.size + " servers.");
    bot.user.setActivity("you | &help", {type: "WATCHING"});
});

var prefix = "&"

bot.on("message", async msg => {

    if (msg.author.bot) return;

    if(msg.content == prefix + "ping") {
        const m = await msg.channel.send("Pong:");
        m.edit(`Pong: ${m.createdTimestamp - msg.createdTimestamp}ms`);
    }

    if(msg.content == prefix + "invite") {
        msg.channel.send(`https://discord.gg/p9Tfd45`)
    }

    if (msg.content.startsWith(prefix + 'avatar')) {
        var User = msg.mentions.members.first()
        if(!User) {
            const avatarEmbed = new Discord.MessageEmbed()
                .setColor(`#FFC0CB`)
                .setTitle(`Your avatar`)
                .setImage(msg.author.displayAvatarURL());
            msg.channel.send(avatarEmbed);
        } else {
            const useravatarEmbed = new Discord.MessageEmbed()
            .setColor(`#FFC0CB`)
            .setTitle( User.displayName + `'s avatar`)
            .setImage(bot.users.cache.get(User.id).displayAvatarURL());
        msg.channel.send(useravatarEmbed);
        }

    }

    if(msg.content == prefix + "welcome") {
        const WelcomeTestEmbed = new Discord.MessageEmbed()
            .setColor('#63e764')  
            .setTitle(`**Welcome to ${msg.guild.name}**`)
            .setDescription(`Welcome ${msg.author.username} to ${msg.guild.name}! Please enjoy your time here :) Make sure to read the rules. If you have any issues please contact a member of staff, Thanks :slight_smile:`)   
            .setTimestamp()  
        msg.channel.send(WelcomeTestEmbed) 
    }
    
    if(msg.content == prefix + "meme") {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                const memeembed = new Discord.MessageEmbed()
                    .setColor('#7cfc00')
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Subreddit: r/${json.subreddit}`)
                    //.setTimestamp()
                msg.channel.send(memeembed)
            });
    }

    if(msg.content == prefix + "xue") {
        msg.channel.send("𝔁𝓾𝓮:cold_face:𝓱𝓾𝓪:woman_fairy:𝓹𝓲𝓪𝓸:heart_eyes_cat:𝓹𝓲𝓪𝓸:moyai:𝓫𝓮𝓲:japanese_goblin:𝓯𝓮𝓷𝓰:star_struck:𝔁𝓲𝓪𝓸:smirk_cat:𝔁𝓲𝓪𝓸:footprints:")
    }
    
    if(msg.content == prefix + "coinflip") {
        var facts = ["Head", "tail"]
        var fact = Math.floor(Math.random() * facts.length);
        const coinembed = new Discord.MessageEmbed()
            .setColor('#9c51b6')
            .setTitle('Coin flip')
            .setDescription( 'Result: ' + facts[fact] )
            .setTimestamp()
        msg.channel.send(coinembed)

    }
    
    if(msg.content == prefix + "diceroll") {
    var facts = ["1", "2", "3", "4", "5", "6"]
    var fact = Math.floor(Math.random() * facts.length);
    const diceembed = new Discord.MessageEmbed()
        .setColor('#9c51b6')
        .setTitle('Dice roll')
        .setDescription( 'Result: ' + facts[fact] )
        .setTimestamp()
    msg.channel.send(diceembed)

    }

    if(msg.content.startsWith(prefix + "hm")) {
        const args = msg.content.split(' ').slice(1);
        var hmword = args.join(' ') 
        if(!hmword) return msg.channel.send("Nothing to hm!")
        if(hmword.includes("@everyone")) return msg.channel.send("Don't try it!")
        var hmmword = hmword.replace(/h|m/gi, "hm")
        var hmmmword = hmmword.replace(/a/gi, "ahm")
        msg.channel.send(hmmword)
    }

    if(msg.content == prefix + "topic") {
        var member= msg.mentions.members.first();
        var facts = ["What is your favorite drink?", "What country do you want to visit?", "What is your favorite Discord server?", "What is your favorite song?", "What did you do yesterday?", "What will you do tomorrow?", "What is your favorite movie?", "What is your favorite food?", "What games do you play?", "What is your favorite game?"];
        var fact = Math.floor(Math.random() * facts.length);
        const topicEmbed = new Discord.MessageEmbed()
            .setColor('#7cfc00')
            .setTitle('**Topic:**')
            .setDescription(facts[fact])
            .setTimestamp()
        msg.channel.send(topicEmbed);
    }

	if (msg.content.startsWith(prefix + 'repeat')) {
        const args = msg.content.split(' ').slice(1);
        const repeatword = args.join(' ')
        if(!repeatword) return msg.reply('Nothing to repeat!');
        if(repeatword.includes(prefix + "kick")) return msg.reply("Don't try it!")
        if(repeatword.includes(prefix + "ban")) return msg.reply("Don't try it!")
        if(repeatword.includes(prefix + "purge")) return msg.reply("Don't try it!")   
        if(repeatword.includes("@everyone")) return msg.reply("Don't try it!")    
        msg.channel.send(repeatword)
	}

    if(msg.content.startsWith(prefix + '8ball')) {
        const args = msg.content.split(' ').slice(1); 
        const question = args.join(' '); 
        var facts = ["Yes.", "No.", "I don't know", "Of course.", "Never.", "Maybe.", "Hmm...", "Excuse me?"];
        var fact = Math.floor(Math.random() * facts.length);
        const ballembed = new Discord.MessageEmbed()
            .setColor('#9c51b6')
            .setTitle('**8ball**')
            .setDescription( '**Your question**: ' + question + '\n**My answer**: ' + facts[fact] )
            .setTimestamp()
        msg.channel.send(ballembed);
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

        //msg.channel.send("Done!")
    
    }

    if(msg.content.startsWith(prefix + 'punch')) {
        var member= msg.mentions.members.first();
        const spanke = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Punch command')
            .setDescription('Usage: &punch [member ping]')
        if (!member) return msg.channel.send(spanke)
        const hitee = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle( msg.member.displayName + " :right_facing_fist: " + member.displayName)
            .setDescription( msg.author.toString() + ' punched ' + member.toString() )
        msg.channel.send(hitee)
    }

    if (msg.content.startsWith(prefix + 'embed')) {
        const args = msg.content.split(' ').slice(1);
        const repeatword = args.join(' ')
        if(!repeatword) return msg.reply('Nothing to put in an embed!');
        const embedembed = new Discord.MessageEmbed()
            .setColor('#003152')
            .setTitle('Message from ' + msg.member.displayName)
            .setDescription(repeatword)
            .setTimestamp()
        msg.channel.send(embedembed)
	}
	
    if(msg.content == prefix + "help"){
        const helpEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**COMMAND LIST**')
            .setDescription(`**Information commands**\n&botinfo : Gives bot info.\n&help : This command.\n&invite: Gives an invite to Memey Man server.\n\n**Main commands**\n&ping : Gives current ping.\n&meme : Gives a random meme.\n&urban : Gives urban dictionary definition.\n&punch : Punches a user!\n&avatar: Gives your/someone's avatar.\n&8ball : Answers your question.\n&topic : Gives a chat topic.\n\n**Text commands**\n&repeat : Repeats your message.\n&embed : Puts your message in an embed.\n&hm: HMs your message.\n&xue : Xue hua piao piao bei feng...\n\n**Utility commands**\n&coinflip : Flips a coin.\n&diceroll : Rolls a dice.\n\n**Moderator commands**\n&ban : Bans a user.\n&kick : Kicks a user.\n&purge : Deletes messages.`)
	    msg.channel.send(helpEmbed); 
	    
    }

    if(msg.content == prefix + "botinfo"){
        const infoEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**BOT INFO**')
            .setDescription('Bot name: Memey Man\nDeveloper: RedTea\nPrefix: &')
            .setFooter('Type &help to get help!')
	    msg.channel.send(infoEmbed);
	    
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
                    if(!res) return msg.channel.send("No results found.");
                    let { word, definition, example} = res;
                        
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

bot.login(process.env.token);