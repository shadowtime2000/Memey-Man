const Discord = require('discord.js');
const { ReactionCollector } = require("discord.js-collector");
exports.run = async (bot, msg, args) => {
        const botMessage = await msg.channel.send("Memey Man's commands!");
        ReactionCollector.paginator({
                botMessage,
                user: msg,
                pages: [
                        new MessageEmbed({ 
                                title: "Command list",
                                description: "``Page 1`` Fun commands\n``Page 2`` Image commands\n``Page 3`` Text commands\n``Page 4`` Moderation commands" 
                        }),
                        new MessageEmbed({ 
                                title: "Fun commands",
                                description: "First page content..." 
                        }),
                        new MessageEmbed({ 
                                title: "Image commands",
                                description: "First page content..." 
                        }),
                        new MessageEmbed({ 
                                title: "Text commands",
                                description: "First page content..." 
                        }),
                        new MessageEmbed({ 
                                title: "Moderation commands",
                                description: "First page content..." 
                        }),
                ],
        });
};