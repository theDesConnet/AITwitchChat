const Command = require('../structure/command.js');

module.exports = new Command({
    name: 'leave',
    description: 'Leave to joined streamer chat',
    async execute(client, args, channel, tags, message, self) {
        const leavechannel = args[1];
        if (!leavechannel) client.say(channel, `[ERROR] You have not specified the channel to which you want to leave!`)
        client.part(leavechannel.toLowerCase()).then(() => {
            client.say(channel, `[INFO] Leaved to ${leavechannel} channel`);
        }).catch(err => {
            console.log(err);
        });
    }
})