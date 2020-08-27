const Discord = require('discord.js');
const Translator = require('@danke77/google-translate-api');
exports.run = async (bot, msg, args) => {

    const args1 = msg.content.split(' ').slice(1); 
    const giventext = args1.join(' '); 

    if (!giventext) return msg.channel.send("Enter text to translate.")
 
    const translator = new Translator({
        from: 'auto',
        to: 'en',
        raw: false,
        client: 'gtx',
        tld: 'cn',
    });
    
    const res = await translator.translate(giventext)
        .catch(err => {
            console.error(err);
        });

    const translateembed = new Discord.MessageEmbed()
        .setColor("#301934")
        .setTitle("Translation result")
        .setDescription(res.text)
        .setFooter(`Given language: ${res.from.language.iso}`)

    msg.channel.send(translateembed)
    
};