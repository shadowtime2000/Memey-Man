const Discord = require('discord.js');
const { ReactionCollector } = require("discord.js-collector");
exports.run = async (bot, msg, args) => {
        const botMessage = await message.channel.send("Simple paginator...");
        ReactionCollector.paginator({
                botMessage,
                user: message,
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