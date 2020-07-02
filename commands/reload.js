exports.run = (bot, msg, args) => {
    if(msg.author.id == "611396886418685982")
    if(!args || args.length < 1) return msg.reply("Must provide a command name to reload.");
    const commandName = args[0];
    if(!bot.commands.has(commandName)) {
      return message.reply("That command does not exist");
    }
    delete require.cache[require.resolve(`./${commandName}.js`)];
    bot.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    bot.commands.set(commandName, props);
    msg.reply(`The command ${commandName} has been reloaded`);
  };