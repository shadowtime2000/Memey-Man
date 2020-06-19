const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'dog',
	description: 'dog command',
	execute(msg, args) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(json => {
                const dogembed = new Discord.MessageEmbed()
                    .setColor('#8B4513')
                    .setTitle(":dog: Dog image!")
                    .setImage(json.message)
                msg.channel.send(dogembed)
            });
	},
};