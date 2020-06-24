const Discord = require('discord.js');
module.exports = {
	name: 'xkcd',
	description: 'xkcd command',
	execute(msg, args) {
        const args1 = msg.content.split(' ').slice(1);
        const searchword = args1.join(' ')
        const image = `https://imgs.xkcd.com/comics/${searchword}.png`
        if(image) {
            const xkcdembed = new Discord.MessageEmbed
                .setColor("#cccccc")
                .setTitle("xkcd search result")
                .setImage(`https://imgs.xkcd.com/comics/${searchword}.png`)
            msg.channel.send(xkcdembed)
        }
        if(!image) {
            msg.channel.send(":x: No results found.")
        }
        },
};