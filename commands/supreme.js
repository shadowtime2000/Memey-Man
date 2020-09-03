const Discord = require("discord.js")
exports.run = (bot, msg, args) => {

    var arguments = msg.content.split(" ").slice(1)
    var text = arguments.join(" ")

    const inv = new Discord.MessageEmbed()
        .setColor("#FF665B")
        .setTitle("Invalid argument")
        .setDescription(prefix + "supreme [text]")
        .setFooter("You didn't provide the text.")

    if(!text) return msg.channel.send(inv)

    message.channel.send({embed = {
        "image": {
          "url": "http://link/to/image.png"
        }
    }})
    
};