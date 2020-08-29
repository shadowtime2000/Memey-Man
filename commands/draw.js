const Discord = require("discord.js")
const { createCanvas, loadImage } = require('canvas');
exports.run = async (bot, msg, args) => {

    var arguments = msg.content.split(' ').slice(1)
    var menu = arguments[0]
    var amount = parseInt(arguments[1])

    if(!menu) return

    if(!amount || isNaN(amount) || amount > 100) return

    if (menu == "pog") {

        const pog = await loadImage("./images/pog.png")
        const rows = Math.ceil(amount / 10)
        const canvas = createCanvas(pog.width * (rows > 1 ? 10 : amount), pog.height*rows)
        const ctx = canvas.getContext("2d")
        let width = 0
        for (var i = 0; i < amount; i++) {
            const row = Math.ceil((i+1)/10)
            ctx.drawImage(pog, width, pog.height * (row - 1))
            if((width + pog.width) === (pog.width * (rows > 1 ? 10 : amount))) width = 0
            else width += pog.width
        }

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'pog.png');

        await msg.channel.send(attachment)


    } else if (menu == "kekw") {

    } else {}

};