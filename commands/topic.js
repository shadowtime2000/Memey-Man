const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    var topics = ["What is your favorite book?", 
                 "What is your favorite drink?", 
                 "What country do you want to visit?",
                 "What is your favorite Discord server?", 
                 "What is your favorite song?",
                 "What did you do yesterday?",
                 "What will you do tomorrow?",
                 "What is your favorite movie?",
                 "What is your favorite food?",
                 "What games do you play?", 
                 "What is your favorite game?"];

    var topic = Math.floor(Math.random() * topics.length);

    const topicEmbed = new Discord.MessageEmbed()
        .setColor('#7cfc00')
        .setTitle('**Topic:**')
        .setDescription(topics[topic])
        .setTimestamp()

    msg.channel.send(topicEmbed);

};
