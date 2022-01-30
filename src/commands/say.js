const Command = require('../structure/command.js');

module.exports = new Command({
    name: 'say',
    description: 'Send message with your text to another streamer chat',
    async execute(client, args, channel, tags, message, self) {
        const sendchannel = args[1];
        const originaltext = args.join(" ");
        if (!sendchannel) return client.say(channel, `[ERROR] You have not specified the channel you want to join!`)
        const text = originaltext.replace(`${args[0]} ${args[1]} `, '');
        if (text == '') return client.say(channel, '[ERROR] Text is null')

        client.say(`#${sendchannel}`, text);
    }
})