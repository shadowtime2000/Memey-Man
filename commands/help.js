const Discord = require('discord.js');
const { ReactionCollector } = require("discord.js-collector");
exports.run = async (bot, msg, args) => {
        const botMessage = await msg.reply('Testing reaction menu...')
        ReactionCollector.menu({
                botMessage,
                user: msg,
                pages: {
                        '✅': {
                                embed: {
                                        description: 'First page content, you can edit and put your custom embed.'
                                }
                        },
                        '❌': {
                                embed: {
                                        description: 'You clicked ❌ emoji.'
                                }
                        }
                }
        });
};