const cp = require("child_process")

exports.run = async (bot, msg, args) => {

    if (msg.author.id !== '611396886418685982') return;

    const args1 = msg.content.split(' ').slice(1); 
    const command = args1.join(' ');

    if (!command) return msg.channel.send("Nothing to execute");
    const startTime = Date.now();
    cp.exec(command, {
        timeout: 10000
    }, (err, stdout, stderr) => {
        if (err) {
            if (stderr.length > 5900 || err.name.length > 256) {
                return msg.channel.send(
                    "Result too long, check logs."
                );
            }
            if ((err.signal = "SIGTERM")) {
                return msg.channel.send("An error occurred.\n" + "```" + stdout + "```");
            }
            return msg.channel.send(errEmbed);
        }
        if (stdout.length > 5900) {
            console.log(stdout);
            return msg.channel.send(
                "Result too long, check logs."
            );
        }
        const duration = convertMs(new Date(Date.now() - startTime).getMilliseconds());
        msg.channel.send(`Executed in ${duration}.\n` + "```" + stdout + "```")
    })
}


function convertMs(ms, delim = ":") {
    const showWith0 = (value) => (value < 10 ? `0${value}` : value);
    const days = showWith0(Math.floor((ms / (1000 * 60 * 60 * 24)) % 60));
    const hours = showWith0(Math.floor((ms / (1000 * 60 * 60)) % 24));
    const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
    const seconds = showWith0(Math.floor((ms / 1000) % 60));
    if (parseInt(days)) return `${days}d`;
    if (parseInt(hours)) return `${hours}h`;
    if (parseInt(minutes)) return `${minutes}min`;
    if (parseInt(seconds)) return `${seconds}s`;
    if (parseInt(ms)) return `${ms}ms`;
    // return `${parseInt(days) ? `${days} day${days > 1 ? 's' : ''}, ` : ''}${parseInt(hours) ? `${hours} hour${hours > 1 ? 's' : ''}, ` : ''}${parseInt(minutes) ? `${minutes} min${minutes > 1 ? 's' : ''},` : ''} ${seconds} sec${seconds > 1 ? 's' : ''}`;
}
