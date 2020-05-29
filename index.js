const Discord = require('discord.js');
const fetch = require('node-fetch');
const bot = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU';

bot.on("ready", () =>{
    bot.login("NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU")
    console.log('Logged in!');
});

bot.on('message', msg=>{
    
    if(msg.content == "?핑")
	 msg.channel.send(bot.ping + ' ms')
	
    if(msg.content == "?밈") {
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
 
    if(msg.content == "?대화주제") {
        var member= msg.mentions.members.first();
        var facts = ["가장 좋아하는 MC무현 노래는?", "가장 마음에 드는 MC무현 프로듀서는?", "MC무현이 불렀으면 하는 노래는?", "MC무현 VS MC재앙", "가장 좋아하는 노무현의 명언은?"];
        var fact = Math.floor(Math.random() * facts.length);
        const topicEmbed = new Discord.MessageEmbed()
                .setColor('#7cfc00')
                .setTitle('**대화 주제:**')
      		.setDescription(facts[fact])
        msg.channel.send(topicEmbed);
    }
	
    if(msg.content.startsWith('?삭제')) {	
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
	    
    if(msg.content == "?명언"){
        var facts = ["부끄러운 줄 알아야지!", "맞습니다. 맞고요.", "제가 언제 겅제 살리겠다고 말이나 헀습니까?", "중력 500배!", "북치고 장구치고", "우리도 고래다.", "야 기분좋다!"];
        var fact = Math.floor(Math.random() * facts.length);
        msg.reply(facts[fact]);
    
    }

    if(msg.content == "?노래추천"){
        var facts = ["MC무현 - 봉하반점", "MC무현 - 옥탑방", "MC무현 - 시간을 달려서", "MC무현 - 이 노래가 ㅇㅂ에서 나온다면 ㅁㅈㅎ", "MC무현 - Rock That Unji", "MC무현 - 응디시티", "MC무현 - 시계를 줄게", "MC무현 - 요들송", "MC무현 - 비행기", "MC무현 - 무현의 꿈"];
        var fact = Math.floor(Math.random() * facts.length);
	const songembed = new Discord.MessageEmbed()
		.setColor('#ffa500')
		.setTitle('노래추천')
		.setDescription( facts[fact] )
        msg.channel.send(songembed);
    
    }

    if(msg.content == "?가사"){
        const lEmbed = new Discord.MessageEmbed()
	    .setColor('#ffa500')
            .setTitle('**가사 커맨드**')
            .setDescription('사용방법: ?가사 (노래 제목)\n\n사용 가능한 노래: 응디시티, Rock That Unji\n\n*주의: 노래 제목의 대소문자를 구분해서 써주세요*')
	
	msg.channel.send(lEmbed);
	    
    }
	
    if(msg.content.startsWith('?괴롭히기')) {
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
	
    if(msg.content == "?뜻"){
        const mEmbed = new Discord.MessageEmbed()
	    .setColor('#ffa500')
            .setTitle('**뜻 커맨드**')
            .setDescription('사용방법: ?뜻 (단어)\n\n사용 가능한 단어: 은디탁, 보수적, 응디시티')
	
	msg.channel.send(mEmbed);
	    
    }
	
    if(msg.content == "?커맨드"){
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**커맨드 목록**')
            .setDescription('**정보 커맨드**\n?정보, ?커맨드\n\n메인 커맨드**\n?핑, ?명언, ?노래추천, ?대화주제, ?가사, ?뜻, ?괴롭히기\n\n**관리 커맨드**\n ?밴, ?킥, ?삭제\n\n괴롭히기 커맨드 사용방법: ?괴롭히기 [멤버 핑하기]')
	msg.channel.send(exampleEmbed);
	    
    }

    if(msg.content == "?정보"){
        const infoEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**봇 정보**')
            .setDescription('봇 이름: 노무현\n접두사: ?[커맨드]\n도움말 커맨드: ?커맨드')
	msg.channel.send(infoEmbed);
	    
    }


    if(msg.content == "?뜻 은디탁"){
        const ttakEmbed = new Discord.MessageEmbed()
	    .setColor('#fa5000')
            .setTitle('**은디탁 뜻**')
            .setDescription('**은디탁**은 MC무현과 함께 작업하며 수많은 노래를 만들어낸 천재 프로듀서이다. 발매한 곡으로는 요들송, 죽은것들을 위한 시 등이 있다. 슬프게도 지금은 활동을 하지 않는다.')
	
	msg.channel.send(ttakEmbed);
	    
    }

    if(msg.content == "?뜻 보수적"){
        const bosuEmbed = new Discord.MessageEmbed()
	    .setColor('#ffa500')
            .setTitle('**보수적 뜻**')
            .setDescription('**보수적**은 MC무현과 함께 작업하며 노래를 만들고 있는 프로듀서이다. 은디탁의 뒤를 잇는 프로듀서라는 평이 많다. 발매한 곡으로는 옥탑방, 비행기, 무현의 꿈 등이 있다.')
	
	msg.channel.send(bosuEmbed);
	    
    }

    if(msg.content == "?뜻 응디시티"){
        const indi2Embed = new Discord.MessageEmbed()
	    .setColor('#ffa500')
            .setTitle('**응디시티 뜻**')
            .setDescription('**응디시티**는 MC무현이 발매한 곡 중 하나이다. 이 곡은 유튜브에서 1000만 조회수를 뛰어넘는 등 가장 인기가 많고 잘 알려져 있는 MC무현 노래이다.')
	
	msg.channel.send(indi2Embed);
	    
    }
      
    if(msg.content == "?가사 응디시티"){
        const indi1Embed = new Discord.MessageEmbed()
	    .setColor('#ffa500')
            .setTitle('**응디시티 가사**')
            .setDescription('여긴 응디시티\n\n노무현이 왔습니다 싱싱한 노무현이 왔습니다\n\n대한민국 군대들 지금까지 뭐했어 어? 뭐했노 이기 심심하면 불러다가 뺑뺑뺑뺑이 북 딱 딱 따닥따닥 제가 뭐 경제살리겠다고 말이나 했습니까? 했는데 그래도 했으면 됐지 그죠? 북 딱 딱 따닥따닥\n\n미국한테 매달려가지고 형님형님 야 바짓가랑이 매달려가지고 형님형님 야 응디 뒤에 숨어가지고 형님형님 야 그렇게 별들달고 뺑뺑뺑뺑이 돌리고 말았단 얘깁니까? (예스!)\n\n야 딱좋다 기분좋다 여러분 마지막까지 흔들어볼까요? (예에에에~!) 좋습니다 야 딱좋다 기분좋다 오늘은 제가 쏩니다 (와아아아) 허허허허 야 기분좋다아 아아 아아 아아 아아아아 여긴응디시티\n\n응디 응디 응디 응디 응디 응디 응디 응디 (흔들으라이) 응디 응디 응디 응디 응디 응디 아 마 매끼나라 고마  응디 응디 응디 응디 응디 응디 확 올라갔다가 확 내려갔다가 응디 응디 응디 응디 응디 응디 \n\n이 부엉이바위쪽으로 가자\n감사합니다')
	
	msg.channel.send(indi1Embed);
	    
    }
      
    if(msg.content == "?가사 Rock That Unji"){
        const unjiEmbed = new Discord.MessageEmbed()
	    .setColor('#ffa500')
            .setTitle('**Rock That Unji 가사**')
            .setDescription('노무현 노무현 노무노무 딱좋다 노무현 노무현 노무노무 딱좋다 노무현 노무현 노무노무 딱좋다 노무현 현 현 노무 딱좋다\n\n노무현이 주도하는 운지 이거정말 계속 안심이되는 죽이는 그런 운지 팍올라 갔다가 확 내려왔다가 북치고 장구치고 딱치고 딱치고 아주 빠르게 꼬라박습니다 (노무현 딱 운지)\n\n새벽에 운지 준비하고 있는데. 그 난데 없이 어지럽고. 정신을 잃어 버려가지고. 그래서 계획까지 짰다가! 딱 딱 운지.\n\n노무노무 기분 딱좋다 노무노무 응딩이 딱좋다 운지 이거는 왜이랬냐 저거는 왜저랬냐 어찌하면 되겠느냐고 아무리 가르쳐 달라고 해도 아무도 안가르쳐 줍니다\n\n알면서 알았다면 왜 (운지) 그것이 끊임 없이 왜 (운지) 줄줄이 모여가가지고 왜 파악 꼴아박습니까 왜\n\n흔들어라 흔들어라 응딩이 딱 죽을똥 살똥 흔들어라 응딩이 딱 당연히 흔들어라 응딩이 파악 북치고 장구치고 운지 딱 믿을수 없을만큼 흔들어라 응딩이 딱 뺑뺑이 돌리고 흔들어라 응딩이 딱 흔들어라 흔들어라 흔들어라 응딩이 파악 밤낮없이 열심히 흔들어라 이기야\n\n노무현 노무현 응딩이 딱좋다. 죽을똥 살똥 흔들어라 딱 얼마나 행복합니까 여러분 딱 노무현 노무현 응딩이 딱좋다. 미국 개xx 응딩이 딱 북한 근사한 응딩이 딱 노무현 노무현 응딩이 딱좋다. 노무현 딱좋다. 노무현 좋다.\n\n모든것이 딱좋다\n\n또박 또박 잡종 개xx 이 말대꾸를 한단말입니다. 다돌았으.. 그것도 그 공짜 비슷한 xx xx 개xx조차도 노무현이 하는거만 다 반대하면 되겠냐 어쨌든 그 두사람이 논쟁을 하다가 쫙 운지 사고를 쳐뿌려 가지고 꼬라박습니다.그것도 급경사의 내리막을 파악 운지\n\n부엉이 바위 노무노무 부엉이 바위 (부엉이 바위 쪽으로 가자) 부엉이 바위 노무노무 딱딱 좋다 부엉이 바위 노무노무 부엉이 바위 (부엉이 바위 쪽으로 가자) 부엉이 바위 노무노무 딱딱 좋다\n\n노무현 딱 응딩이 기분좋다 노무현 딱 응딩이 딱딱 좋다 노무현 딱 응딩이 기분좋다 노무현 딱 응딩이 딱딱 좋다\n\n모든것이 딱좋다')
	msg.channel.send(unjiEmbed);
	    
    }

    if(msg.content.startsWith('?킥')) {
	const noperm = new Discord.MessageEmbed()
		.setColor('#FF0000')
		.setTitle('커맨드를 실행할 수 없습니다')
		.setDescription('멤버를 킥할 수 있는 권한이 없습니다.')
	if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm);
        var member= msg.mentions.members.first();
        member.kick().then((member) => {
            const kickembed = new Discord.MessageEmbed()
                .setColor('#ffff00')
                .setTitle('**성공적으로 킥했습니다.**')
                .setDescription( member.displayName + ' 님을 킥했습니다.');
            msg.channel.send(kickembed)
        }).catch(() => {
            msg.channel.send("그 멤버를 킥할 수 없습니다.");
        });
    }

    if(msg.content.startsWith('?밴')) {
	const noperm1 = new Discord.MessageEmbed()
		.setColor('#FF0000')
		.setTitle('커맨드를 실행할 수 없습니다')
		.setDescription('멤버를 밴할 수 있는 권한이 없습니다.')
        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(noperm1);
        var member= msg.mentions.members.first();
        member.ban().then((member) => {
            const banembed = new Discord.MessageEmbed()
                .setColor('#ffff00')
                .setTitle('**성공적으로 밴했습니다.**')
                .setDescription( member.displayName + ' 님을 밴했습니다.');
            msg.channel.send(banembed)
        }).catch(() => {
            msg.channel.send("그 멤버를 밴할 수 없습니다.");
        });
    }
       
})

bot.login(process.env.token);
