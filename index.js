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
        var facts = ["가장 좋아하는 MC무현 노래는?", "가장 마음에 드는 MC무현 프로듀서는?", "MC무현이 불렀으면 하는 노래는?", "MC무현 VS MC재앙", "가장 좋아하는 노무현의 명언은?"];
        var fact = Math.floor(Math.random() * facts.length);
        const topicEmbed = new Discord.MessageEmbed()
                .setColor('#7cfc00')
                .setTitle('**대화 주제:**')
      		.setDescription(facts[fact])
        msg.channel.send(topicEmbed);
    }
	
    if(msg.content.startsWith('?purge')) {	
	if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply('권한이 없습니다');
	const args = msg.content.split(' ').slice(1); 
	const amount = args.join(' '); 
	const extranum = "1"
	const amountaa = parseInt(amount)
	const extranumaa = parseInt(extranum)
	const messageamount = amountaa + extranumaa

	if (!amount) return msg.reply('얼마나 삭제할지 써야 합니다.'); 
	if (isNaN(amount)) return msg.reply('삭제할 메세지의 수는 숫자여야 합니다.'); 

	if (amount > 100) return msg.reply('한 번에 100개보다 많은 메세지를 삭제할 수 없습니다.'); 
	if (amount < 1) return msg.reply('최소 1개의 메세지를 삭제해야 합니다.'); 
	
	msg.channel.messages.fetch({ limit: messageamount }).then(messages => {
	    msg.channel.bulkDelete(messages 
	)});	
    }
	
    if(msg.content.startsWith('?harass')) {
	var member= msg.mentions.members.first();
	var facts = ["을(를) 때리맥였습니다.", "이(가) 찰과상을 입었습니다.", "이(가) 타박상을 입었습니다.", "을(를) 부엉이바위로 보냈습니다.", "을(를) 국정원 지하에 가뒀습니다."];
	var fact = Math.floor(Math.random() * facts.length);
	const hitee = new Discord.MessageEmbed()
		.setColor('#ffa500')
		.setTitle('괴롭히기')
		.setDescription( member.displayName + facts[fact] )
		.setFooter('괴롭히기 커맨드 사용방법: ?괴롭히기 [멤버 핑하기]')
	msg.channel.send(hitee)
    }
	
    if(msg.content == "?help"){
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**커맨드 목록**')
            .setDescription('**Info commands**\n?botinfo, ?help\n\nMain commands**\n?meme, ?topic, ?harass\n\n**관리 커맨드**\n ?ban, ?kick, ?purge\n\n괴롭히기 커맨드 사용방법: ?괴롭히기 [멤버 핑하기]')
	msg.channel.send(exampleEmbed);
	    
    }

    if(msg.content == "?botinfo"){
        const infoEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**봇 정보**')
            .setDescription('봇 이름: Memey man\nprefix: ?\nType ?help to get help!')
	msg.channel.send(infoEmbed);
	    
    }

    if(msg.content.startsWith('?kick')) {
	const noperm = new Discord.MessageEmbed()
		.setColor('#FF0000')
		.setTitle('Oops!')
		.setDescription("You can't use that command!")
	if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm);
        var member= msg.mentions.members.first();
        member.kick().then((member) => {
            const kickembed = new Discord.MessageEmbed()
                .setColor('#ffff00')
                .setTitle('**Sucessfully kicked member**')
                .setDescription( 'Kicked' + member.displayName + '.');
            msg.channel.send(kickembed)
        }).catch(() => {
            msg.channel.send("Can't kick that member!");
        });
    }

    if(msg.content.startsWith('?밴')) {
	const noperm1 = new Discord.MessageEmbed()
		.setColor('#FF0000')
		.setTitle('Oops!')
		.setDescription("You can't use that command!")
        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(noperm1);
        var member= msg.mentions.members.first();
        member.ban().then((member) => {
            const banembed = new Discord.MessageEmbed()
                .setColor('#ffff00')
                .setTitle('**Successfully banned member**')
                .setDescription( 'Banned' + member.displayName + '.');
            msg.channel.send(banembed)
        }).catch(() => {
            msg.channel.send("Can't ban that member!");
        });
    }
       
})

bot.login(process.env.token);
