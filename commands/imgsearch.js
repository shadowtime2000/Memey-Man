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

    var opts = {
        searchTerm: search,
        queryStringAddition: 'safe=active'
    };

    gis(opts, logResults);

    function logResults(error, results) {
        if (error) {
            console.log(error);
            msg.channel.send("An error occurred.")
        }
        else {

            if(!results[0]) {
                const resultembedn = new Discord.MessageEmbed()
                    .setColor("#F9A602")
                    .setTitle("Not found.")
                    .setDescription("Couldn't retrieve any result.")

                return msg.channel.send(resultembedn)
            }

            let img

            for(var i = 0; i < results.length; i++) {
                var num = Math.floor(Math.random() * results.length);
                if (checkURL(results[num].url) == true) {
                    img = results[num].url
                    break
                } else {}
            }

            const resultembed = new Discord.MessageEmbed()
                .setColor("#F9A602")
                .setTitle("Search result")
                .setImage(img)

            msg.channel.send(resultembed)
        }
    }

};