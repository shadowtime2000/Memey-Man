const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU';

bot.on('message', msg=>{
    if(msg.content == "?부엉이"){
        msg.reply('우흥!')
    }

})

bot.on('message', msg=>{
    if(msg.content == "?운지"){
        msg.reply('저기 부엉이바위 쪽으로 가자')
    }
})

bot.login(process.env.token);
