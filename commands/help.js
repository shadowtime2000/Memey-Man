const Discord = require('discord.js');
const { ReactionCollector } = require("discord.js-collector");
exports.run = async (bot, msg, args) => {
        const botMessage = await msg.reply('Testing reaction menu...')
        ReactionCollector.menu({
                botMessage,
                user: msg,
                pages: {
                        '✅': {
                                content: 'Hello world!',
                                reactions: ['?'], // Reactions to acess next sub-page
                                embed: {
                                description: 'First page content, you can edit and put your custom embed.'
                                },
                                pages:{ // Exemple sub-pages
                                        '❓': {
                                                content: '?',
                                                embed: {
                                                description: 'You\'ve found the secret page.'
                                                }
                                        }
                                }
                        },
                        '❌': {
                                content: 'What\'s happened?',
                                embed: {
                                        description: 'You\'ve clicked in ❌ emoji.'
                                }
                        }
                }
        });
};