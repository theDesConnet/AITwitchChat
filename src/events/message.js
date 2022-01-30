const Event = require('../structure/event.js');
const config = require('../config.json');
const AI = require('cleverbot-free');
const math = require('../functions/math.js');

module.exports = new Event('message', async(client, channel, tags, message, self) => {
    if (self) return;

    if (message.startsWith(config.prefix)) { //Выполнение команды
        const args = message.substring(config.prefix.length).split(/ +/);
        const command = client.findCommand(args[0]);
    
        if (!command) return;

        try {
            command.execute(client, args, channel, tags, message, self);
        } catch (err) {
            console.log(`[ERROR] ${err}`);
        }
    } else { //ИИ чат бот
        let reply = math.choice([false, true, false, true, false]);
        if (config.randommsganswer === false) reply = true;
        if (config.randommsganswer === "off") reply = false;
        console.log(`[INFO] Reply is ${reply}`);

        if (reply === true) {
            AI(message).then(reply => {
                client.say(channel, reply);
            }).catch(err => {
                console.log(`[ERROR] ${err}`);
            });
        }
    }
})