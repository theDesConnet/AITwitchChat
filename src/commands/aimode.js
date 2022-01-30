const Command = require('../structure/command.js');
const config = require('../config.json');

module.exports = new Command({
    name: 'aimode',
    description: 'Settings ai mode',
    async execute(client, args, channel, tags, message, self) {
        const mode = args[1];
        if (!mode) {
            client.say(channel, `[Help] Avalible AI Modes\nModes: All - Replying to all messages.\n Random - Replying to random messages. \n Off - Off replying to messages.`);
            return setTimeout(() => client.say(channel, `[INFO] Current AI Mode: "${config.randommsganswer == true ? "Random" : config.randommsganswer == "off" ? "Off" : "All"}"`), 1000);
        }

        switch (mode.toLowerCase()) {
            case "all":
                config.randommsganswer = false;
                client.say(channel, `[INFO] Bot replying to all messages`);
                break;

            case "random":
                config.randommsganswer = true;
                client.say(channel, `[INFO] Bot replying to random messages`);
                break;

            case "off":
                config.randommsganswer = "off";
                client.say(channel, `[INFO] Bot off replying to messages`);
                break;
        }
    }
})