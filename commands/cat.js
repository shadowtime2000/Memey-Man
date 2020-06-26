const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'cat',
	description: 'cat command',
	execute(msg, args) {
        // fetch('https://aws.random.cat/meow')
        //     .then(res => res.json())
        //     .then(json => {
        //         const catembed = new Discord.MessageEmbed()
        //             .setColor('#8B4513')
        //             .setTitle(":cat: Cat image!")
        //             .setImage(json.file)
        //         msg.channel.send(catembed)
        //     });
            const catembed = new Discord.MessageEmbed()
                    .setColor('#8B4513')
                    .setTitle("&Cat command not working")
                    .setDescription("Random cat image stopped working. I don't even know if this is temporary or permanent.")
                msg.channel.send(catembed)
	},
};