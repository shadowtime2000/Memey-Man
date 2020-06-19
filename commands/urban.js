const Discord = require('discord.js');
const urban = require('urban')
module.exports = {
	name: 'urban',
	description: 'urban dictionary command',
	execute(msg, args) {
        const args1 = msg.content.split(' ').slice(1); 
        const searchword = args1.join(' '); 

        const noword = new Discord.MessageEmbed()
            .setColor('#ffa000')
            .setTitle('Urban command')
            .setDescription('Usage: &urban [word]')

        const toolong = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Oops!')
            .setDescription("Definition is too long. Can't send message because of discord embed character limit.")

        if(!searchword) return msg.channel.send(noword);
        
        let image = "https://i.imgur.com/RFm5zMt.png";
        let search = urban(searchword)
            try {
                search.first(res => {
                    if(!res) return msg.channel.send(":x: No results found.");
                    let { word, definition, example } = res;
                        
                        let embed = new Discord.MessageEmbed()
                            .setColor('#ffa000')
                            .setAuthor(`Urban Dictionary | ${word}`, image )
                            .setDescription(`**Defintion:** ${definition || "No definition"}\n**Example:** ${example || "No Example"}`)
                            //.setTimestamp()
                            if( definition.length + word.length + example.length + 22 > 2048 ) return msg.channel.send(toolong)
                            msg.channel.send(embed)                   
                })
            } catch(e) {
                return msg.channel.send("Error")
            }
	},
};