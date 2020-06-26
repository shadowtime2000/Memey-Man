const Discord = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

module.exports = {
	name: 'reload',
	description: 'reload command',
	execute(msg, args) {
		if (!args.length) return msg.channel.send(`You didn't pass any command to reload, ${msg.author}!`);
        const commandName = args[0].toLowerCase();
        const command = msg.bot.commands.get(commandName)

        if (!command) return msg.channel.send(`There is no command with name \`${commandName}\`, ${msg.author}!`);
        delete require.cache[require.resolve(`./commands/${command.name}.js`)];
        try {
            const newCommand = require(`./commands/${command.name}.js`);
            msg.bot.commands.set(newCommand.name, newCommand);
            msg.channel.send(`Command \`${command.name}\` was reloaded!`);
        } catch (error) {
            console.log(error);
            msg.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.msg}\``);
        }
    },
};