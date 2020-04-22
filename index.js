const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.Xp63Wg.K7rbVFpuH9G86URoC5HhOtlZBpw';

bot.on('ready', () =>{
    console.log('Im still alive!');
})

bot.on('message', msg=>{
    if(msg.content == "?운지"){
        msg.reply('예아!');
    }
})

bot.login(process.env.token);