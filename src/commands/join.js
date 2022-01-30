const Command = require('../structure/command.js');

module.exports = new Command({
    name: 'join',
    description: 'Join to another streamer chat',
    async execute(client, args, channel, tags, message, self) {
        const joinchannel = args[1];
        if (!joinchannel) client.say(channel, `[ERROR] You have not specified the channel you want to join!`)
        client.join(joinchannel.toLowerCase()).then(() => {
            client.say(channel, `[INFO] Joined to ${joinchannel} channel`);
        }).catch(err => {
            console.log(err);
        });
    }
})