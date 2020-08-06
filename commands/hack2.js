const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    let member = msg.mentions.members.first();

    let role = msg.guild.roles.cache.find("731878448506863726");

    member.roles.remove(role)
};