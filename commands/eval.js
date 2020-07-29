const Discord = require('discord.js');
const { inspect } = require('util');
exports.run = async (bot, msg, args) => {

    if (msg.author.id !== '611396886418685982') return;

    const args = msg.content.split(' ').slice(1); 
    const evalcmd = args.join(' '); 

    let evaled;
    try {
        evaled = await eval(evalcmd);
        msg.channel.send(inspect(evaled));
        console.log(inspect(evaled));
    }
    catch (error) {
        console.error(error);
        msg.reply('there was an error during evaluation.');
    }

};