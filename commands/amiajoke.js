const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
	name: 'amiajoke',
	description: 'image command',
	execute(msg, args) {
        const canvas = Canvas.createCanvas(897, 601);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./amiajoke.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 480, 50, 330, 330);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'amiajoke.jpg');

        msg.channel.send(attachment)
    },
};