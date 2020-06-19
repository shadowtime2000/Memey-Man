module.exports = {
	name: 'test',
	description: 'Ping!',
	execute(msg, args) {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                const memeembed = new Discord.MessageEmbed()
                    .setColor('#7cfc00')
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Subreddit: r/${json.subreddit}`)
                    //.setTimestamp()
                msg.channel.send(memeembed)
            });
	},
};