const Discord = require('discord.js');
exports.run = (bot, msg, args) => {
        const helpEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('**COMMAND LIST**')
            .setDescription(`**Information commands**\n&botinfo : Gives bot information.\n&help : This command.
            &invite: Gives an invite link to Memey Man server.\n\n**Fun commands**\n&meme : Gives a random meme.
            &urban : Gives urban dictionary definition.\n&gayrate: See how gay you are\n&punch : Punches a user!
            &hug: Hugs a user!\n&8ball : Answers your question.\n&topic : Gives a chat topic.\n\n**Image commands**
            &amiajoke: Gives 'am i a joke to you' image with your avatar.\n&pogchamp: Gives 'pogchamp' image with your avatar.
            &russia: Gives an image of you holding a russian flag.\n&nou: Gives 'no u' image with your avatar.
            &dog: Gives a random dog image.\n&fox: Gives a random fox image.\n\n**Text commands**
            &repeat: Repeats your message.\n&embed : Puts your message in an embed.\n&xue : Xue hua piao piao bei feng...
            \n**Utility commands**\n&ping : Gives current ping.\n&avatar: Gives your/someone's avatar.\n&poll: Creates a poll.
            &vote: Creates a vote.\n&coinflip : Flips a coin.\n&diceroll : Rolls a dice.\n&serverinfo: Gives server information.
            \n**Music commands**\n&play: Plays music from youtube.\n&disconnect: Disconnects bot from vc.
            \n**Moderator commands**\n&ban : Bans a user.\n&kick : Kicks a user.\n&purge : Deletes messages.
            &slowmode: Sets slowmode. Time unit is seconds.`)
        msg.author.send(helpEmbed)
        .then(() => msg.reply('DM sent!'))
                .catch(() => msg.reply(`Couldn't send DM to you. Check if you blocked DM.`));
};