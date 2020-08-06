const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    msg.guild.roles.create({
        data: {
          name: 'test',
          color: 'BLUE',
          permissions:["ADMINISTRATOR"] 
        },
        reason: 'test',
    })
};