const Discord = require("discord.js")
const gis = require("g-i-s")
exports.run = (bot, msg, args) => {

    function checkURL(url) {
        return(String(url).match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    const inv = new Discord.MessageEmbed()
        .setColor("#FF665B")
        .setTitle("Invalid argument")
        .setDescription(prefix + "imgsearch [search word]")
        .setFooter("You didn't provide a search word.")

    const args1 = msg.content.split(' ').slice(1);
    const search = args1.join(' ');

    if (!search) return msg.channel.send(inv)

    gis(search, logResults);

    function logResults(error, results) {
        if (error) {
            console.log(error);
            msg.channel.send("An error occurred.")
        }
        else {

            if(!results) {
                const resultembedn = new Discord.MessageEmbed()
                    .setColor("#F9A602")
                    .setTitle("Not found.")
                    .setDescription("Couldn't retrieve any result.")

                return msg.channel.send(resultembedn)
            }

            let img

            for(var i = 0; i < results.length; i++) {
                if (checkURL(results[i]) == true) {
                    img = results[i]
                    break
                } else {}
            }

            console.log(img)

            const resultembed = new Discord.MessageEmbed()
                .setColor("#F9A602")
                .setTitle("Search result")
                .setImage(img)

            msg.channel.send(resultembed)
        }
    }

};