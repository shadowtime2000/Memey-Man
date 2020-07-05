const Discord = require('discord.js');
const urban = require('urban')
exports.run = (bot, msg, args) => {

        function chunkstr(str, size) {
            const numChunks = Math.ceil(str.length / size)
            const chunks = new Array(numChunks)
        
            for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
            chunks[i] = str.substr(o, size)
            }
        
            return chunks
        }

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
                        if( definition.length + word.length + example.length + 22 > 2048 ){
                        
                        let longdefinition
                        let longexample

                        for(let i = 0; i < definition.length; i += 2000) {
                            longdefinition = definition.substring(i, Math.min(definition.length, i + 1000));                                
                        }
                        for(let j = 0; j < example.length; j += 2000) {
                            longexample = example.substring(i, Math.min(example.length, i + 1000));
                        }
                        let longembed = new Discord.MessageEmbed()
                            .setColor(`#ffa000`)
                            .setDescription(`**Definition:** ${longdefinition}\n**Example:** ${longexample}`)
                        msg.channel.send(longembed)
                    } else {
                        let embed = new Discord.MessageEmbed()
                            .setColor('#ffa000')
                            .setAuthor(`Urban Dictionary | ${word}`, image )
                            .setDescription(`**Defintion:** ${definition || "No definition"}\n**Example:** ${example || "No Example"}`)
                    
                        msg.channel.send(embed)
                    }                   
                })
            } catch(e) {
                return msg.channel.send("Error")
            }
};