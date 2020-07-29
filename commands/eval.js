const Discord = require('discord.js');
const { inspect } = require('util');
exports.run = async (bot, msg, args) => {

    if (msg.author.id !== '611396886418685982') return;

    const args1 = msg.content.split(' ').slice(1); 
    const evalcmd = args1.join(' '); 

    let evaled;
    try {
        evaled = await eval(evalcmd);
        msg.channel.send("```yaml\n" + 
        inspect(evaled)
        + "\n```").catch(error => {
            msg.channel.send("```yaml\n-- ERROR WHILE SENDING RESULTS -- \n\n" + error + "```")
        });
        console.log("-- Inspection result --\n" + inspect(evaled) + "\n------------------------");
    }
    catch (error) {
        console.error(error);
        msg.reply('there was an error during evaluation.');
    }

};