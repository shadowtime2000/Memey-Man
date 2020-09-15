const Discord = require("discord.js")
exports.run = (bot, msg, args) => {

    const user = msg.mentions.users.first()
    const member = msg.mentions.members.first()
    const arguments = msg.content.split(' ').slice(1); 
    const memberid = arguments.join(' '); 

    if (!memberid && !user && !member) {
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(`#006a4e`)
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ format: 'png', dynamic: true }))
            .setThumbnail(msg.author.displayAvatarURL({ format: 'png', dynamic: true }))
            .addFields(
                { name: "Username", value: msg.author.username, inline: true },
                { name: "Nickname", value: msg.member.displayName, inine: true },
                { name: "Avatar URL", value: `[Click here](${msg.author.displayAvatarURL({format: 'png', dynamic: true})})`, inline: true },
            )
            .addFields(
                { name: "ID", value: msg.author.id, inline: true},
                { name: "Status", value: msg.author.presence.status , inline: true}
            )
        msg.channel.send(avatarEmbed);
    }

    if (user && member) {
        const useravatarEmbed = new Discord.MessageEmbed()            
            .setColor(`#006a4e`)
            .setAuthor(user.tag, user.displayAvatarURL({ format: 'png', dynamic:true }))
            .setThumbnail(user.displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
            .addFields(
                { name: "Username", value: user.username, inline: true },
                { name: "Nickname", value: member.displayName, inine: true },
                { name: "Avatar URL", value: `[Click here](${msg.author.displayAvatarURL({format: 'png', dynamic: true})})`, inline: true },
            )
            .addFields(
                { name: "ID", value: user.id, inline: true},
                { name: "Status", value: user.presence.status , inline: true}
            )
        msg.channel.send(useravatarEmbed);
    }

    if (memberid && !user && !member && msg.guild.member(memberid)) {
        const idavatarEmbed = new Discord.MessageEmbed() 
            .setColor(`#006a4e`)
            .setAuthor(bot.users.cache.get(memberid).tag, bot.users.cache.get(memberid).displayAvatarURL({ format: 'png' }))
            .setThumbnail(bot.users.cache.get(memberid).displayAvatarURL({ size: 1024, format: 'png', dynamic: true }))
            .addFields(
                { name: "Username", value: bot.users.cache.get(memberid).username, inline: true },
                { name: "Nickname", value: msg.guild.members.cache.get(memberid).displayName, inine: true },
                { name: "Avatar URL", value: `[Click here](${bot.users.cache.get(memberid).displayAvatarURL({format: 'png', dynamic: true})})`, inline: true },
            // )
            // .addFields(
                { name: "ID", value: bot.users.cache.get(memberid).id, inline: true},
                { name: "Status", value: bot.users.cache.get(memberid).presence.status , inline: true}
            )
        msg.channel.send(idavatarEmbed);
    } 

    if(memberid && !user && !msg.guild.member(memberid) ) return msg.channel.send(":x: No results found.")

};