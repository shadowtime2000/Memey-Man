const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    let member = msg.mentions.users.first();

    member.roles.add("731878448506863726")
};