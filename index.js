const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU';

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

})

bot.login(process.env.token);
