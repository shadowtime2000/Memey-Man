const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU';

bot.on('message', msg=>{
    if(msg.content == "?운지"){
        msg.reply('예아!')
    }
})

bot.login(process.env.token);