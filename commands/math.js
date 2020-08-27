const Discord = require('discord.js')
const { evalExpression } = require('@hkh12/node-calc');
exports.run = (bot, msg, args) => {

    const noe = new Discord.MessageEmbed()
        .setColor("#FF665B")
        .setTitle("Invalid argument")
        .setDescription(prefix + "math [equation]")
        .setFooter("You didn't provide an equation.")

    const args1 = msg.content.split(' ').slice(1);
    const equation = args1.join(' ');

    if (!equation) return msg.channel.send(noe)

    const result = evalExpression(equation)

    const calc = new Discord.MessageEmbed()
        .setColor("#B399D4")
        .setTitle("Calculation result")
        .setDescription(result)

    msg.channel.send(calc)

};