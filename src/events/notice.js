const Event = require('../structure/event.js');
const config = require('../config.json');

module.exports = new Event('notice', async (client, channel, msgid, message) => {
    switch (msgid) {
        //On docs tmi.js (https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md#notice)
        case "msg_timedout":
            client.say(`#${config.mainchannelname}`, `[INFO] Bot has been timeouted on ${channel} channel. Therefore, the bot left this channel.`);
            client.part(channel).catch(err => {
                console.log(err);
            });
            break;

        case "msg_banned":
            client.say(`#${config.mainchannelname}`, `[INFO] Bot has been banned on ${channel} channel. Therefore, the bot left this channel.`);
            client.part(channel).catch(err => {
                console.log(err);
            });
            break;
    }
})