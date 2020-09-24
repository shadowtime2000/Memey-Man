const Discord = require('discord.js');
const urban = require('urban')
exports.run = (bot, msg, args) => {

    const args1 = msg.content.split(' ').slice(1); 
    const searchword = args1.join(' '); 

    const noword = new Discord.MessageEmbed()
        .setColor('#FF665B')
        .setTitle('Invalid argument')
        .setDescription(prefix + "urban [search word]")
        .setFooter('You didn\'t provide a word to search.')

    if(!searchword) return msg.channel.send(noword);
    
    let image = "https://i.imgur.com/RFm5zMt.png";
    let search = urban(searchword)

    try {
        search.first(res => {
            
            if (!res) return msg.channel.send(":x: No results found.");
            let { word, definition, example } = res;                        
            if ( definition.length + word.length + example.length + 22 > 2048 ) {
                
                let longdefinition
                let longexample

                for (let i = 0; i < definition.length; i += 2000) {
                    longdefinition = definition.substring(i, Math.min(definition.length, i + 900));                                
                }

                for (let j = 0; j < example.length; j += 2000) {
                    longexample = example.substring(j, Math.min(example.length, j + 900));
                }

                let longembed = new Discord.MessageEmbed()
                    .setColor(`#ffa000`)
                    .setAuthor(`${word} - Urban Dictionary`, image )
                    .setDescription(`**Definition:** ${longdefinition}\n\n**Example:** ${longexample}`)

                msg.channel.send(longembed)
                
            } else {

                let embed = new Discord.MessageEmbed()
                    .setColor('#ffa000')
                    .setAuthor(`${word} - Urban Dictionary`, image )
                    .setDescription(`**Definition:** ${definition || "No definition"}\n\n**Example:** ${example || "No Example"}`)
            
                msg.channel.send(embed)
            }                   
        })
        
    } catch(e) {

        return msg.channel.send("Error")
        
    }
    
};
