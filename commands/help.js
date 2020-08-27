const Discord = require('discord.js');
const { ReactionCollector } = require("discord.js-collector");
exports.run = async (bot, msg, args) => {

    const botMessage = await msg.channel.send('``React to view my commands!``')
    ReactionCollector.menu({
        botMessage,
        user: msg,
        pages: {

            '😄': {
                embed: {
                    color: "#1167b1",
                    title: "Fun commands",
                    description: '``meme`` Gets a random meme.\n``dadjoke`` Gets a random dad joke\n``gayrate`` See how gay is someone\n``hug`` Hug a user!\n``punch`` Punch a user!\n``topic`` Gives a chat topic\n``urban`` Searches something on urban dictionary.',
                    footer: {
                        text: "This server's prefix is ``" + prefix + "``"
                    }
                }
            },

            '🛠️': {
                embed: {
                    color: "#1167b1",
                    title: "Tool commands",
                    description: '``ping`` Gets bot ping.\n``prefix`` Sets bot prefix.\n``wiki`` Searches something on Wikipedia.\n``avatar`` Gives user\'s avatar.\n``translate`` Translates text to English.\n``poll`` Creates a poll.\n``serverinfo`` Gives server info.',
                    footer: {
                        text: "This server's prefix is ``" + prefix + "``"
                    }
                }
            },

            '🎨': {
                embed: {
                    color: "#1167b1",
                    title: "Image commands",
                    description: '``dog`` Gives a dog image.\n``fox`` Gives a fox image.\n``amiajoke`` Am I a joke to you?\n``pogchamp`` Pogchamp!\n``nou`` No u\n``russia`` Mother Russia!',
                    footer: {
                        text: "This server's prefix is ``" + prefix + "``"
                    }
                }
            },

            '🔤': {
                embed: {
                    color: "#1167b1",
                    title: "Text commands",
                    description: '``xue`` Xue hua piao piao bei feng piao piao',
                    footer: {
                        text: "This server's prefix is ``" + prefix + "``"
                    }
                }
            },

            '🔨': {
                embed: {
                    color: "#1167b1",
                    title: "Moderator commands",
                    description: '``kick`` Kicks a user.\n``ban`` Bans a user.\n``purge`` Deletes messages.\n``slowmode`` Sets slowmode.',
                    footer: {
                        text: "This server's prefix is ``" + prefix + "``"
                    }
                }
            }

        }

    });

};
