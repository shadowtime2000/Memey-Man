const Discord = require('discord.js');
exports.run = async (bot, msg, args) => {
    const member = msg.author
    var role= msg.guild.roles.cache.find(role => role.name === "test");
    member.roles.add(role);
};