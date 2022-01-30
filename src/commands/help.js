const Command = require('../structure/command.js');
const config = require('../config.json');

module.exports = new Command({
    name: 'help',
    description: 'See all commands',
    async execute(client, args, channel, tags, message, self) {
        client.say(channel, `[INFO] Current prefix: ["${config.prefix}"]; All commands: ['join' - joining to another channel; 'leave' - leaveing to another channel; 'aimode' - choosing ai mode; 'help' - See all commands; about - Information about bot].`)
    }
})