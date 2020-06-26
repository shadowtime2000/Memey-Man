const Discord = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
module.exports = {
	name: 'reload',
	description: 'reload command',
	execute(msg, args) {
        if(!args || args.length < 1) return msg.reply("Must provide a command name to reload.");
        const commandName = args[0];
        if(!bot.commands.has(commandName)) {
            return msg.reply("That command does not exist");
        }
        delete require.cache[require.resolve(`./${commandName}.js`)];
        bot.commands.delete(commandName);
        const props = require(`./${commandName}.js`);
        bot.commands.set(commandName, props);
        msg.reply(`The command ${commandName} has been reloaded`);
    },
};