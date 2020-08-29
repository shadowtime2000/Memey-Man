const Discord = require("discord.js")
const { createCanvas, loadImage } = require('canvas');
exports.run = async (bot, msg, args) => {

    var arguments = msg.content.split(' ').slice(1)
    var menu = arguments[0]
    var amount = parseInt(arguments[1])

    const menuembed = new Discord.MessageEmbed()
        .setColor("#1167b1")
        .setTitle("Draw command")
        .addFields(
            { name: 'Available options', value: "``" + prefix + "draw pog``\n``" + prefix + "draw kekw``"}
        )

    if(!menu) return msg.channel.send(menuembed)

    if(menu == "pog") {

        if(!amount) {
            const noamountpog = new Discord.MessageEmbed()
                .setColor("#FF665B")
                .setTitle("Invalid argument")
                .setDescription(prefix + "draw pog [amount]")
                .setFooter("You did't provide the number of pog.")
            return msg.channel.send(noamountpog)
        }

        if(isNaN(amount)) {
            const nonumpog = new Discord.MessageEmbed()
                .setColor("#FF665B")
                .setTitle("Invalid argument")
                .setDescription("Amount of pog should be a number.")
            return msg.channel.send(nonumpog)
        }

        if(amount<0) {
            const smallnumpog = new Discord.MessageEmbed()
                .setColor("#FF665B")
                .setTitle("Invalid argument")
                .setDescription("Amount of pog should be bigger than or equal to 1.")
            return msg.channel.send(smallnumpog)
        }

        if(amount>100) {
            const bignumpog = new Discord.MessageEmbed()
                .setColor("#FF665B")
                .setTitle("Invalid argument")
                .setDescription("Amount of pog should be smaller than or equal to 100.")
            return msg.channel.send(bignumpog)
        }

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