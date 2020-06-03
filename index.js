const Discord = require('discord.js');
const fetch = require('node-fetch');
const ytdl = require('ytdl-core');
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

    if(msg.content == "?coinflip") {
        var facts = ["Head", "tail"]
        var fact = Math.floor(Math.random() * facts.length);
        const coinembed = new Discord.MessageEmbed()
            .setColor('#9c51b6')
            .setTitle('Coin flip')
            .setDescription( 'Result: ' + facts[fact] )
            .setFooter( 'Request by ' + msg.member.displayName )
        msg.channel.send(coinembed)

    }
    
    if(msg.content == "?diceroll") {
    var facts = ["1", "2", "3", "4", "5", "6"]
    var fact = Math.floor(Math.random() * facts.length);
    const diceembed = new Discord.MessageEmbed()
        .setColor('#9c51b6')
        .setTitle('Dice roll')
        .setDescription( 'Result: ' + facts[fact] )
        .setFooter( 'Request by ' + msg.member.displayName )
    msg.channel.send(diceembed)

    }

    if(msg.content == "?topic") {
        var member= msg.mentions.members.first();
        var facts = ["What is your favorite drink?", "What is your favorite song?", "What did you do yesterday?", "What will you do tomorrow?", "What is your favorite movie?", "What is your favorite food?", "What games do you play?"];
        var fact = Math.floor(Math.random() * facts.length);
        const topicEmbed = new Discord.MessageEmbed()
            .setColor('#7cfc00')
            .setTitle('**Topic:**')
            .setDescription(facts[fact])
            .setFooter( "Request by " + msg.member.displayName )
        msg.channel.send(topicEmbed);
    }

	if (msg.content.startsWith('?repeat')) {
        const args = msg.content.split(' ').slice(1);
        const repeatword = args.join(' ')
        if(!repeatword) return msg.reply('Nothing to repeat!');
        msg.channel.send(repeatword)
	}

    if(msg.content.startsWith('?8ball')) {
        const args = msg.content.split(' ').slice(1); 
        const question = args.join(' '); 
        var facts = ["Yes.", "No.", "I don't know", "Of course.", "Never.", "Maybe.", "You can make it happen!", "It's possible."];
        var fact = Math.floor(Math.random() * facts.length);
        const ballembed = new Discord.MessageEmbed()
            .setColor('#9c51b6')
            .setTitle('**8ball**')
            .setDescription( 'Your question: ' + question + '\nMy answer: ' + facts[fact] )
            .setFooter( "Request by " + msg.member.displayName )  
        msg.channel.send(ballembed);
    }
	
    if(msg.content.startsWith('?purge')) {	

        if (msg.channel.type == "dm") return;

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
        var currentdate = new Date(); 
        var facts = [" is so stupid.", " is ugly", " is an idiot.", " should disappear.", " looks like Kim Jong Un."];
        var fact = Math.floor(Math.random() * facts.length);
        var member= msg.mentions.members.first();
        const args = msg.content.split(' ').slice(1); 
        const memberping = args.join(' '); 
        if (!member) return msg.reply('Ping a member after ?harass')
            const hitee = new Discord.MessageEmbed()
                .setColor('#ffa500')
                .setTitle('You harassed ' + member.displayName  + '!' )
                .setDescription( member.displayName + facts[fact] )
                .setFooter( "Request by " + msg.member.displayName )
        msg.channel.send(hitee)
    }
	
    if(msg.content == "?help"){
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**COMMAND LIST**')
            .setDescription('**Information commands**\n?botinfo, ?help\n\n**Fun commands**\n?meme, ?harass, ?8ball\n\n**Misc commands**\n?topic, ?repeat, ?coinflip, ?diceroll\n\n**Moderator commands**\n?ban, ?kick, ?purge')
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

    if(msg.content.startsWith('?ban')) {

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
       
    var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]
 
    /* Simple command manager */
    if (parts[0] === "!image") { // Check if first part of message is image command
 
        // call the image function
        image(message, parts); // Pass requester message to image function
 
    }
 
});
 
function image(message, parts) {
 
    /* extract search query from message */
 
    var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            // Handle no results
            return;
        }
 
        // Send result
        message.channel.send( urls[0] );
    });
 
}

bot.login(process.env.token);
