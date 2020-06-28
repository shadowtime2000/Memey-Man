const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'help command',
	execute(msg, args) {
        const helpEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**COMMAND LIST**')
            .setDescription(`**Information commands**\n&botinfo : Gives bot information.\n&help : This command.\n&invite: Gives an invite link to Memey Man server.\n\n**Fun commands**\n&meme : Gives a random meme.\n&urban : Gives urban dictionary definition.\n&gayrate: See how gay you are\n&punch : Punches a user!\n&hug: Hugs a user!\n&8ball : Answers your question.\n&topic : Gives a chat topic.\n\n**Image commands**\n&amiajoke: Gives 'am i a joke to you' image with your avatar.\n&pogchamp: Gives 'pogchamp' image with your avatar.\n&russia: Gives an image of you holding a russian flag.\n&nou: Gives 'no u' image with your avatar.\n&dog: Gives a random dog image.\n&fox: Gives a random fox image.\n\n**Text commands**\n&repeat: Repeats your message.\n&embed : Puts your message in an embed.\n&xue : Xue hua piao piao bei feng...\n\n**Utility commands**\n&ping : Gives current ping.\n&avatar: Gives your/someone's avatar.\n&poll: Creates a poll.\n&vote: Creates a vote.\n&coinflip : Flips a coin.\n&diceroll : Rolls a dice.\n&serverinfo: Gives server information.\n\n**Music commands**\n&play: Plays music from youtube.\n&disconnect(&dc): Disconnects bot from vc.\n\n**Moderator commands**\n&ban : Bans a user.\n&kick : Kicks a user.\n&purge : Deletes messages.\n&slowmode: Sets slowmode. Time unit is seconds.`)
        msg.author.send(helpEmbed)
        .then(() => msg.reply('DM sent!'))
                .catch(() => msg.reply(`Couldn't send DM to you. Check if you blocked DM.`));
        },
};