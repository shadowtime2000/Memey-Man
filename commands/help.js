const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'help command',
	execute(msg, args) {
        const helpEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**COMMAND LIST**')
            .setDescription(`**Information commands**\n&botinfo : Gives bot info.\n&help : This command.\n&invite: Gives an invite to Memey Man server.\n\n**Main commands**\n&ping : Gives current ping.\n&meme : Gives a random meme.\n&urban : Gives urban dictionary definition.\n&punch : Punches a user!\n&hug: Hugs a user!\n&avatar: Gives your/someone's avatar.\n&8ball : Answers your question.\n&topic : Gives a chat topic.\n\n**Text commands**\n&repeat : Repeats your message.\n&embed : Puts your message in an embed.\n&xue : Xue hua piao piao bei feng...\n\n**Image commands**\n&cat: Gives a cat image.\n&dog: Gives a dog image.\n&fox: Gives a fox image.\n\n**Utility commands**\n&vote: Creates a vote.\n&coinflip : Flips a coin.\n&diceroll : Rolls a dice.\n\n**Moderator commands**\n&ban : Bans a user.\n&kick : Kicks a user.\n&purge : Deletes messages.\n&slowmode: Sets slowmode.`)
        msg.reply("DM sent!")
        msg.author.send(helpEmbed); 
	},
};