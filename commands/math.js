const Discord = require('discord.js')
const { evalExpression } = require('@hkh12/node-calc');
exports.run = (bot, msg, args) => {

    var images = [
        "https://thumbs.gfycat.com/QualifiedGreedyBeardedcollie-size_restricted.gif",
        "https://media1.giphy.com/media/J39gurpvL7SHpnTTJB/giphy.gif",
        "https://thumbs.gfycat.com/AccurateSpecificKingfisher-size_restricted.gif",
        "https://media1.giphy.com/media/ghIeczlW5Ba8JzXtgO/source.gif",
        "https://thumbs.gfycat.com/PowerfulParchedEider-size_restricted.gif"
        ];

    var image = Math.floor(Math.random() * images.length);

    const noe = new Discord.MessageEmbed()
        .setColor("#FF665B")
        .setTitle("Invalid argument")
        .setDescription(prefix + "math [equation]")
        .setFooter("You didn't provide an equation.")

    const inve = new Discord.MessageEmbed()
        .setColor("#FF665B")
        .setTitle("Invalid argument")
        .setDescription(prefix + "math [equation]")
        .setFooter("You provided an invalid equation.")

    const args1 = msg.content.split(' ').slice(1);
    const equation = args1.join(' ');

    if (!equation) return msg.channel.send(noe)

    let result

    try {
        result = evalExpression(equation)
    } catch (error) {
        msg.channel.send(inve)

        return
    }

    if (result == "Infinity") {

        const infinity = new Discord.MessageEmbed()
            .setColor("#B399D4")
            .setTitle("YOU BROKE THE UNIVERSE!!!")
            .setImage(image)
            .setDescription('AAAAA LOOK AT WHAT YOU\'VE DONE!!!')

        return msg.channel.send(infinity)

    }

    const calc = new Discord.MessageEmbed()
        .setColor("#B399D4")
        .setTitle("Calculation result")
        .setDescription(result)

    msg.channel.send(calc)

};