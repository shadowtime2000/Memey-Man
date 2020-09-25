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
            if (stderr.length > 2048) {
                console.log("-- Inspection result --\n" + stderr + "\n------------------------")
                return msg.reply(
                    "Error too long, check logs."
                );
            }
            if ((err.signal = "SIGTERM")) {
                console.log("-- Inspection result --\n" + stdout + "\n------------------------")
                return msg.reply("An error occurred. Check logs.");
            }
            return msg.channel.send(errEmbed);
        }
        if (stdout.length > 2048) {
            console.log("-- Inspection result --\n" + stdout + "\n------------------------");
            return msg.reply("Result too long, check logs.");
        }
        console.log("-- Inspection result --\n" + stdout + "\n------------------------")
        const duration = milis(new Date(Date.now() - startTime).getMilliseconds());
        msg.reply(`Executed in ${duration}.\n` + "```yaml\n" + stdout + "```")
    })
}


function milis(ms, delim = ":") {
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
}
