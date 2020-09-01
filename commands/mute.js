const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    const mutemember = msg.mentions.members.first();
    const role = msg.guild.roles.cache.find(r => r.name === 'Muted by Memey Man');

    const args1 = msg.content.split(' ').slice(2); 
    const mutereason = args1.join(' ');

    const noperm = new Discord.MessageEmbed()
        .setColor('#FF665B')
        .setTitle('Missing permissions')
        .setDescription("You need ``Kick members`` permission to use this command.")

    const nomem = new Discord.MessageEmbed()
        .setColor("#FF665B") 
        .setTitle('Invalid argument')
        .setDescription(prefix + "mute [member mention] [reason]")
        .setFooter("You didn't provide a member to mute.")

    const nor = new Discord.MessageEmbed()
        .setColor("#FF665B") 
        .setTitle('Invalid argument')
        .setDescription(prefix + "mute [member mention] [reason]")
        .setFooter("You didn't provide a mute reason.")

    if(!role) {
        msg.guild.roles.create({
            data:{
                name: "Muted by Memey Man",
                color: "#000000",
                permissions: []
            }
        })
    }

    if (!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send(noperm)

    if(!mutemember) return msg.channel.send(nomem);

    if (mutemember.roles.cache.find(r => r.name === 'Muted by Memey Man')){

        const alreadymuted = new Discord.MessageEmbed()
            .setColor('#FF665B')
            .setTitle('Member already muted!')
            .setDescription(`I can't mute someone who is already muted.`)
            .setTimestamp()

        return msg.channel.send(alreadymuted);

    }

    if(!mutereason) return msg.channel.send(nor)

    try {

        msg.guild.channels.cache.forEach((channel) => {
            channel.overwritePermissions([
                {
                id: role.id,
                deny: ['SEND_MESSAGES'],
                },
            ], 'mute');

            mutemember.roles.add(role);
        });

    } catch (error) {
        
    }

    const muted = new Discord.MessageEmbed()
        .setColor("73DB6A")
        .setTitle(`Successfully muted ${mutemember.displayName}`)
        .addFields(
            { name: 'Moderator', value: msg.member.displayName, inline: true },
            { name: 'Reason', value: mutereason, inline: true },
        )
        .setTimestamp()

    msg.channel.send(muted);

};
