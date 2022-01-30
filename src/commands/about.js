const Command = require('../structure/command.js');
const config = require('../config.json');

module.exports = new Command({
    name: 'about',
    description: 'Information about bot',
    async execute(client, args, channel, tags, message, self) {
        client.say(channel, `AITwitchChat v0.1 (c0d9d by DesConnet) [GitHub: DS1NC-DesConnet]`);
    }
})