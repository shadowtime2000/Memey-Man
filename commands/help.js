const Discord = require('discord.js');
const { ReactionCollector } = require("discord.js-collector");
exports.run = async (bot, msg, args) => {
        const botMessage = await msg.channel.send("Memey Man's commands!");
        ReactionCollector.paginator({
                botMessage,
                user: msg,
                pages: [
                        new Discord.MessageEmbed({ 
                                title: "Command list",
                                description: "``Page 1`` Fun commands\n``Page 2`` Image commands\n``Page 3`` Text commands\n``Page 4`` Moderation commands" 
                        }),
                        new Discord.MessageEmbed({ 
                                title: "Fun commands",
                                description: "First page content..." 
                        }),
                        new Discord.MessageEmbed({ 
                                title: "Image commands",
                                description: "First page content..." 
                        }),
                        new Discord.MessageEmbed({ 
                                title: "Text commands",
                                description: "First page content..." 
                        }),
                        new Discord.MessageEmbed({ 
                                title: "Moderation commands",
                                description: "First page content..." 
                        }),
                ],
        });
};