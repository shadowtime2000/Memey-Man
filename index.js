const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU';

bot.once('ready', () => {
 console.log('Ready!');
});

bot.on('message', msg=>{
    if(msg.content == "?부엉이"){
        msg.reply('우흥!')
    }

    if(msg.content == "?운지"){
        msg.reply('저기 부엉이바위 쪽으로 가자')

    }

    if(msg.content == "?작통권연설"){
        msg.reply('대한민국 군대들 지금까지 뭐했노!')
    
    }

    if(msg.content == "?응디"){
        msg.reply('미국한테 매달려 가지고 바짓가랭이 매달려 가지고 응디... 미국 응딩이 뒤에서 숨어가지고 형님, 형님, 형님 빽만 믿겠다')
     
    }

    if(msg.content == "?동네"){
        msg.reply('동네 힘 센 사람이 돈 많은 사람이 “동네 길 이렇게 고칩시다, 둑 이렇게 고칩시다. 뭐 산에 나무 심읍시다.” 하면은 어지간한 사람은 따라가는 거지요. 미국이 주도하는 질서, 그것을 거역할 순 없습니다.')
    
    }

    if(msg.content == "?예아"){
        msg.reply('예아')
    
    }

   if(msg.content == "?파악"){
        msg.reply('파악~ 올라갔다가 파악~ 내려갔다가')
    
    }


    if(msg.content == "?커맨드"){
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('커맨드 목록')
            .setDescription('동네, 파악, 운지, 응디, 예아, 가사, 부엉이, 작통권연설\n\n*가사 커맨드를 쓸 때는 노래 제목의 대소문자를 구별해서 써주세요*')
	
	msg.channel.send(exampleEmbed);
	    
    }
      
    if(msg.content == "?가사 응디시티"){
        const indi1Embed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('응디시티 가사')
            .setDescription('여긴 응디시티\n\n노무현이 왔습니다 싱싱한 노무현이 왔습니다\n\n대한민국 군대들 지금까지 뭐했어 어? 뭐했노 이기 심심하면 불러다가 뺑뺑뺑뺑이 북 딱 딱 따닥따닥 제가 뭐 경제살리겠다고 말이나 했습니까? 했는데 그래도 했으면 됐지 그죠? 북 딱 딱 따닥따닥\n\n미국한테 매달려가지고 형님형님 야 바짓가랑이 매달려가지고 형님형님 야 응디 뒤에 숨어가지고 형님형님 야 그렇게 별들달고 뺑뺑뺑뺑이 돌리고 말았단 얘깁니까? (예스!)\n\n야 딱좋다 기분좋다 여러분 마지막까지 흔들어볼까요? (예에에에~!) 좋습니다 야 딱좋다 기분좋다 오늘은 제가 쏩니다 (와아아아) 허허허허 야 기분좋다아 아아 아아 아아 아아아아 여긴응디시티\n\n응디 응디 응디 응디 응디 응디 응디 응디 (흔들으라이) 응디 응디 응디 응디 응디 응디 아 마 매끼나라 고마  응디 응디 응디 응디 응디 응디 확 올라갔다가 확 내려갔다가 응디 응디 응디 응디 응디 응디 \n\n이 부엉이바위쪽으로 가자\n감사합니다')
	
	msg.channel.send(indi1Embed);
	    
    }
      
    if(msg.content == "?가사 Rock That Unji"){
        const unjiEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('Rock That Unji 가사')
            .setDescription('노무현 노무현 노무노무 딱좋다 노무현 노무현 노무노무 딱좋다 노무현 노무현 노무노무 딱좋다 노무현 현 현 노무 딱좋다\n\n노무현이 주도하는 운지 이거정말 계속 안심이되는 죽이는 그런 운지 팍올라 갔다가 확 내려왔다가 북치고 장구치고 딱치고 딱치고 아주 빠르게 꼬라박습니다 (노무현 딱 운지)\n\n새벽에 운지 준비하고 있는데. 그 난데 없이 어지럽고. 정신을 잃어 버려가지고. 그래서 계획까지 짰다가! 딱 딱 운지.\n\n노무노무 기분 딱좋다 노무노무 응딩이 딱좋다 운지 이거는 왜이랬냐 저거는 왜저랬냐 어찌하면 되겠느냐고 아무리 가르쳐 달라고 해도 아무도 안가르쳐 줍니다\n\n알면서 알았다면 왜 (운지) 그것이 끊임 없이 왜 (운지) 줄줄이 모여가가지고 왜 파악 꼴아박습니까 왜\n\n흔들어라 흔들어라 응딩이 딱 죽을똥 살똥 흔들어라 응딩이 딱 당연히 흔들어라 응딩이 파악 북치고 장구치고 운지 딱 믿을수 없을만큼 흔들어라 응딩이 딱 뺑뺑이 돌리고 흔들어라 응딩이 딱 흔들어라 흔들어라 흔들어라 응딩이 파악 밤낮없이 열심히 흔들어라 이기야\n\n노무현 노무현 응딩이 딱좋다. 죽을똥 살똥 흔들어라 딱 얼마나 행복합니까 여러분 딱 노무현 노무현 응딩이 딱좋다. 미국 개xx 응딩이 딱 북한 근사한 응딩이 딱 노무현 노무현 응딩이 딱좋다. 노무현 딱좋다. 노무현 좋다.\n\n모든것이 딱좋다\n\n또박 또박 잡종 개xx 이 말대꾸를 한단말입니다. 다돌았으.. 그것도 그 공짜 비슷한 xx xx 개xx조차도 노무현이 하는거만 다 반대하면 되겠냐 어쨌든 그 두사람이 논쟁을 하다가 쫙 운지 사고를 쳐뿌려 가지고 꼬라박습니다.그것도 급경사의 내리막을 파악 운지\n\n부엉이 바위 노무노무 부엉이 바위 (부엉이 바위 쪽으로 가자) 부엉이 바위 노무노무 딱딱 좋다 부엉이 바위 노무노무 부엉이 바위 (부엉이 바위 쪽으로 가자) 부엉이 바위 노무노무 딱딱 좋다\n\n노무현 딱 응딩이 기분좋다 노무현 딱 응딩이 딱딱 좋다 노무현 딱 응딩이 기분좋다 노무현 딱 응딩이 딱딱 좋다\n\n모든것이 딱좋다')
	msg.channel.send(unjiEmbed);
	    
    }

    //if(msg.content.startsWith('?kick')) {
        // Easy way to get member object though mentions.
        //var member= msg.mentions.members.first();
        // Kick
        //member.kick().then((member) => {
            // Successmessage
            //msg.channel.send("" + member.displayName + " 님을 부엉이바위 쪽으로 보냈습니다.");
        //}).catch(() => {
             // Failmessage
            //msg.channel.send("실패했습니다.");
        //});
    //}

    //if(msg.content.startsWith('?ban')) {
        // Easy way to get member object though mentions.
        //var member= msg.mentions.members.first();
        // ban
        //member.ban().then((member) => {
            // Successmessage
            //msg.channel.send("" + member.displayName + " 님을 국정원 지하에 가뒀습니다. ");
        //}).catch(() => {
             // Failmessage
            //msg.channel.send("실패했습니다.");
        //});
    //}
    
})

bot.login(process.env.token);
