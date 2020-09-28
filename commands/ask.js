const Discord = require("discord.js")
const WolframAlphaAPI = require('wolfram-alpha-node');

const waApi = WolframAlphaAPI(process.env.WOLFRAM);

exports.run = (bot, msg, args) => {

    const args1 = msg.content.split(' ').slice(1);
    const question = args1.join(' ');

    (async() => {
        try{

            const answer = await waApi.getSpoken(question)
            const answerembed = new Discord.MessageEmbed()
                .setColor("#009900")
                .setTitle("Answer")
                .setDescription(answer)
                .setFooter("Powered by Wolfram Alpha", "https://i.ibb.co/74Y9b4f/wolfram-logo.png")

            msg.channel.send(answerembed)
        } catch(e) {
            console.log(e)
            return msg.channel.send("An error occurred.")
        }
    })()

};