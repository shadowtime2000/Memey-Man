const Discord = require('discord.js');
const fetch = require('node-fetch');
const urban = require('urban')
const bot = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU';

bot.on("ready", () =>{
    bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU")
    console.log('Logged in!');
});

var prefix = "?";

bot.on('message', msg=>{

    if(msg.content.startsWith(prefix + 'prefix')) 
        const args = msg.content.split(' ').slice(1);
        const newprefix = args.join(' ')
        var prefix = newprefix
        const prefixembed = new Discord.MessageEmbed()
            .setColor('#7cfc00')
            .setTitle('Successfully set prefix')
            .setDescription('Successfully modified prefix to ' + newprefix + '.')
        msg.channel.send(prefixembed)
    
    
    if(msg.content == prefix + "meme") {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                const memeembed = new Discord.MessageEmbed()
                    .setColor('#7cfc00')
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Subreddit: ${json.subreddit}`)
                msg.channel.send(memeembed)
            });
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

    if(msg.content == prefix + "topic") {
        var member= msg.mentions.members.first();
        var facts = ["What is your favorite drink?", "What is your favorite song?", "What did you do yesterday?", "What will you do tomorrow?", "What is your favorite movie?", "What is your favorite food?", "What games do you play?"];
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
        if(repeatword.includes("?repeat")) return msg.reply("You can't repeat more than once.")
        if(repeatword.includes("?kick")) return msg.reply("Don't try it!")
        if(repeatword.includes("?ban")) return msg.reply("Don't try it!")
        if(repeatword.includes("?purge")) return msg.reply("Don't try it!")      
        msg.channel.send(repeatword)
	}

    if(msg.content.startsWith(prefix + '8ball')) {
        const args = msg.content.split(' ').slice(1); 
        const question = args.join(' '); 
        var facts = ["Yes.", "No.", "I don't know", "Of course.", "Never.", "Maybe.", "I don't know.", "Excuse me?"];
        var fact = Math.floor(Math.random() * facts.length);
        const ballembed = new Discord.MessageEmbed()
            .setColor('#9c51b6')
            .setTitle('**8ball**')
            .setDescription( 'Your question: ' + question + '\nMy answer: ' + facts[fact] )
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

        if (!amount) return msg.reply('Give me how many messages should I purge!'); 
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
            .setDescription('Usage: ?punch [member ping]')
        if (!member) return msg.channel.send(spanke)
        const hitee = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle( msg.member.displayName + " punched!" )
            .setDescription( msg.member.displayName + ' punched ' + member.displayName )
            .setFooter( "Command usage: ?punch [member ping]" )
        msg.channel.send(hitee)
    }
	
    if(msg.content == prefix + "help"){
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**COMMAND LIST**')
            .setDescription('**Information commands**\n?botinfo, ?help\n\n**Main commands**\n?meme, ?urban, ?punch, ?8ball,\n?topic, ?repeat, ?coinflip, ?diceroll\n\n**Moderator commands**\n?ban, ?kick, ?purge')
	    msg.channel.send(exampleEmbed);
	    
    }

    if(msg.content == prefix + "botinfo"){
        const infoEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**BOT INFO**')
            .setDescription('Bot name: Memey Man\nDeveloper: RedTea\nPrefix: ?')
            .setFooter('Type ?help to get help!')
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
            .setDescription("Can't kick that member!")

            if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm);
            if(!mem) return msg.channel.send(nomemmber)
            if(!kickreason) return msg.channel.send(noreason)
            mem.kick().then((member) => {
                const kickembed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('**Successfully kicked member**')
                    .setDescription( 'Kicked ' + mem.displayName + '.' + '\nModerator: ' + msg.member.displayName + '\nReason: ' + kickreason )
                msg.channel.send(kickembed)
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
            .setDescription("Can't ban that member!")

            if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(noperm1);
            if(!mem1) return msg.channel.send(nomemberembed)
            if(!banreason) return msg.channel.send(noreasonembed)
            mem1.ban().then((member) => {
                const banembed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('**Successfully banned member**')
                    .setDescription( 'Banned ' + mem1.displayName + '.' + '\nModerator: ' + msg.member.displayName + '\nReason: ' + banreason )
                msg.channel.send(banembed)
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
            .setDescription('Usage: ?urban [word]')
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
                            .setFooter('Reply may not send if the definition exceeds embed character limit.')
                            if( definition.length + word.length + example.length + 22 > 2048 ) return msg.channel.send(toolong)
                            msg.channel.send(embed)
                    
                })

            
            } catch(e) {
                return msg.channel.send("Error. Try again")

            }
        }
})

bot.login(process.env.token);
