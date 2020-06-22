const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'help command',
	execute(msg, args) {
        const helpEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**COMMAND LIST**')
            .setDescription(`**Information commands**\n&botinfo : Gives bot information.\n&help : This command.\n&invite: Gives an invite link to Memey Man server.\n\n**Main commands**\n&ping : Gives current ping.\n&meme : Gives a random meme.\n&urban : Gives urban dictionary definition.\n&punch : Punches a user!\n&hug: Hugs a user!\n&avatar: Gives your/someone's avatar.\n&8ball : Answers your question.\n&topic : Gives a chat topic.\n\n**Image commands**\n&amiajoke: Gives 'am i a joke to you' image with your avatar.\n&nou: Gives 'no u' image with your avatar.\n&cat: Gives a random cat image.\n&dog: Gives a random dog image.\n&fox: Gives a random fox image.\n\n**Text commands**\n&repeat: Repeats your message.\n&embed : Puts your message in an embed.\n&xue : Xue hua piao piao bei feng...\n\n**Utility commands**\n&vote: Creates a vote.\n&coinflip : Flips a coin.\n&diceroll : Rolls a dice.\n&serverinfo: Gives server information.\n\n**Moderator commands**\n&ban : Bans a user.\n&kick : Kicks a user.\n&purge : Deletes messages.\n&slowmode: Sets slowmode. Time unit is seconds.`)
        try {
                msg.author.send(helpEmbed);
                msg.reply("DM sent!")
            } catch (err) {
                msg.reply('Failed to send DM to you. Check if you blocked DM.');
            }
        },
};