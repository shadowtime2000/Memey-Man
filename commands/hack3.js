const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    const member = msg.mentions.members.first();
    member.roles.add("740982890346840237");
};