const Discord = require('discord.js');
const fetch = require('node-fetch');
const bot = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU';

bot.on("ready", () =>{
    bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU")
    console.log('Logged in!');
});

bot.on('message', msg=>{
	
    if(msg.content == "?meme") {
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
 
    if(msg.content == "?topic") {
        var member= msg.mentions.members.first();
        var facts = ["What is your favourite drink?", "What is your favourite song?", "What did you do yesterday?", "What will you do tomorrow?", "What is your favourite movie?", "What is your favorite food?", "What games do you play?"];
        var fact = Math.floor(Math.random() * facts.length);
        const topicEmbed = new Discord.MessageEmbed()
                .setColor('#7cfc00')
                .setTitle('**Topic:**')
      		.setDescription(facts[fact])
        msg.channel.send(topicEmbed);
    }
	
    if(msg.content.startsWith('?purge')) {	

        const nopurge = new Discord.MessageEmbed()
            .setColor('#FF0000')
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

	
    if(msg.content.startsWith('?harass')) {
        const args = msg.content.split(' ').slice(1); 
        const memberping = args.join(' '); 
            if (!memberping) return msg.reply('Ping a member after ?harass')
        var facts = [" is so stupid.", " is ugly", " is an idiot.", " should disappear.", " looks like Kim Jong Un."];
        var fact = Math.floor(Math.random() * facts.length);
        const hitee = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle('You harassed ' + member.displayName  + '!' )
            .setDescription( member.displayName + facts[fact] )
            .setFooter('Ping a member to use ?harass command!')
        msg.channel.send(hitee)
    }
	
    if(msg.content == "?help"){
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**COMMAND LIST**')
            .setDescription('**Information commands**\n?botinfo, ?help\n\n**Main commands**\n?meme, ?topic, ?harass\n\n**Moderator commands**\n ?ban, ?kick, ?purge')
	    msg.channel.send(exampleEmbed);
	    
    }

    if(msg.content == "?botinfo"){
        const infoEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**BOT INFO**')
            .setDescription('Bot name: Memey Man\nDeveloper: RedTea\nPrefix: ?')
            .setFooter('Type ?help to get help!')
	    msg.channel.send(infoEmbed);
	    
    }

    if(msg.content.startsWith('?kick')) {
        const args = msg.content.split(' ').slice(2); 
        const kickreason = args.join(' '); 
        const args1 = msg.content.split(' ').slice(1)
        const kickmember = args1.join(' ');

        const noperm = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("You can't use that command!")
        
        const nomemmber = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a member to kick!")

        const noreason = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a reason!")

        if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm);
        if(!kickmember) return msg.channel.send(nomemmber)
        if(!kickreason) return msg.channel.send(noreason)
        var member= msg.mentions.members.first();
        member.kick().then((member) => {
        const kickembed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('**Successfully kicked member**')
            .setDescription( 'Kicked ' + member.displayName + '.' + '\nReason: ' + kickreason );
        msg.channel.send(kickembed)
        }).catch(() => {
            msg.channel.send("Can't kick that member!");
            
        });
    }

    if(msg.content.startsWith('?ban')) {
        const args = msg.content.split(' ').slice(2); 
        const banreason = args.join(' '); 
        const args1 = msg.content.split(' ').slice(1);
        const banmember = args1.join(' ')

        const noperm1 = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("You can't use that command!")

        const nomemberembed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a member to kick!")

        const noreasonembed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('Oops!')
            .setDescription("Give me a reason!")

            if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(noperm1);
            if(!banmember) return msg.channel.send(nomemberembed)
            if(!banreason) return msg.channel.send(noreasonembed)
            var member= msg.mentions.members.first();
            member.ban().then((member) => {
                const banembed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('**Successfully banned member**')
                    .setDescription( 'Banned ' + member.displayName + '.' + '\nReason: ' + banreason );
                msg.channel.send(banembed)
            }).catch(() => {
                msg.channel.send("Can't ban that member!");
        });
    }
       
})

bot.login(process.env.token);