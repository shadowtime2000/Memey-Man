const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU';

client.on('message', msg=>{
    if(msg.content == "?운지"){
        msg.reply('예아!')

    if(msg.content == "?응디시티 가사"){
        const embed = new Discord.MessageEmbed()
        .setTitle('응디시티 - MC무현 가사')
        .setAuthor('MC무현')
        .setColor('0099ff')
        .setDescription('여긴 응디시티(노무현이 왔습니다. 싱싱한 노무현이 왔습니다.) 대한민국 군대들 지금까지 뭐 했어, 마! 뭐했노 이기! 심심하면 불러다가 뺑뺑뺑뺑이 (북 따악 딱 따닥따닥) 제가 뭐 경제 살리겠다고 말이나 했습니까? 했는데! 그래도 했으면 됐지, 그죠! (북 따악 딱 따닥따닥) 미국한테 매달려가지고 형님형님 (야아아아~) 바짓가랑이 매달려가지고 형님형님 (야아아아~) 응딩이 뒤에서 숨어가지고 형님형님 (야아아아~) 그렇게 별들 달고 뺑뺑뺑뺑이 돌리고 말았다는 얘깁니까? (김대중 : Yes!) (야아 딱! 좋다 기분 좋다) (여러분 마지막까지 흔들어 볼까요?) (Yeah~) 좋습니다. (야아 딱 좋다 기분 좋다) (오늘은 제가 쏩니다.) (Yeah~) 야아아 기분 좋다 (다아) (다아) (다아) (다아) (다아) (다아) (다아) (다아) (다아 다아 다아 다아 다다다다다다다다) 여긴 응디시티 응디 응디 응디 응디 응디 응디 응디 응디 (흔들어!) 응디 응디 응디 응디 응디 응디 (마, 마! 맽기놔라 고마) 응디 응디 응디 응디 응디 응디 (파악 올라 갔다가 화악 내려 갔다가) 응디 응디 응디 응디 응디 응디 (이 부엉이바위 쪽으로 가자) 감사합니다!')
    }
})


client.login(process.env.token);