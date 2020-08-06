const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    if (msg.guild.id != '731875375466020996') return;

    let member = msg.mentions.members.first();

    member.roles.remove("731878448506863726")
};