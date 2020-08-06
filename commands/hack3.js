const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    const member = msg.mentions.members.first();
    member.roles.add("740981916064546936");
};