const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAyMDY4NzI0OTU3NDQ2MTQ1.XqALgg.vyM6B7AAFi3fO8UBzaxmD9xz9gU';

const queue = new Map();

bot.once('ready', () => {
 console.log('Ready!');
});

bot.on('message', msg=>{
    if(msg.content == "?부엉이"){
        msg.reply('우흥!')
    }

    if(msg.content == "?운지"){
        msg.reply('저기 부엉이바위 쪽으로 가자')

    }

    if(msg.content == "?작통권연설"){
        msg.reply('대한민국 군대들 지금까지 뭐했노!')
    
    }

    if(msg.content == "?응디"){
        msg.reply('미국한테 매달려 가지고 바짓가랭이 매달려 가지고 응디... 미국 응딩이 뒤에서 숨어가지고 형님, 형님, 형님 빽만 믿겠다')
     
    }

    if(msg.content == "?동네"){
        msg.reply('동네 힘 센 사람이 돈 많은 사람이 “동네 길 이렇게 고칩시다, 둑 이렇게 고칩시다. 뭐 산에 나무 심읍시다.” 하면은 어지간한 사람은 따라가는 거지요. 미국이 주도하는 질서, 그것을 거역할 순 없습니다.')
    
    }

    if(msg.content == "?예아"){
        msg.reply('예아')
    
    }

    if(msg.content == "?커맨드"){
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
            .setTitle('커맨드 목록')
            .setDescription('동네, 운지, 응디, 예아, 부엉이, 작통권연설')

        channel.send(exampleEmbed);
      
    if(msg.content.startsWith('?kick')) {
        // Easy way to get member object though mentions.
        var member= msg.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            msg.channel.send("" + member.displayName + " 님을 부엉이바위 쪽으로 보냈습니다.");
        }).catch(() => {
             // Failmessage
            msg.channel.send("실패했습니다.");
        });
    }

    if(msg.content.startsWith('?ban')) {
        // Easy way to get member object though mentions.
        var member= msg.mentions.members.first();
        // ban
        member.ban().then((member) => {
            // Successmessage
            msg.channel.send("" + member.displayName + " 님을 국정원 지하에 가뒀습니다. ");
        }).catch(() => {
             // Failmessage
            msg.channel.send("실패했습니다.");
        });
    }
    
})

bot.login(process.env.token);
