const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    try {
        msg.guild.roles.create({
            data: {
            name: 'test',
            color: 'BLUE',
            permissions: ["ADMINISTRATOR"],
            mentionable: true
            },
            reason: 'test',
        })
    } catch {}
};