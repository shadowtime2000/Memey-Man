const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    try {
        const member = msg.mentions.members.first();
        member.roles.add("740986299737178195");
    } catch {}
};