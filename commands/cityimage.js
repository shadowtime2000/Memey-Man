const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'cityimage',
	description: 'cityimage command',
	execute(msg, args) {
        const arguments = msg.content.split(' ').slice(1); 
        const cityname = arguments.join(' '); 
        fetch(`http://api.teleport.org/api/urban_areas/slug:${cityname}/images`)
            .then(res => res.json())
            .then(json => {
                // const memeembed = new Discord.MessageEmbed()
                //     .setColor('#7cfc00')
                //     .setTitle("City picture of " + cityname + "!")
                //     .setImage(json.image)
                msg.channel.send(json.web)
            });
	},
};