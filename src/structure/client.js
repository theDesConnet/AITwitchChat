const tmi = require('tmi.js');
const config = require('../config.json');
const Command = require('./command.js');
const fs = require('fs');

class Client extends tmi.Client {
    constructor() {
        super({
            options: { debug: true, messagesLogLevel: "info" },
            connection: {
                reconnect: true,
                secure: true
            },
            identity: {
                username: config.username,
                password: `oauth:${config.twitchtoken}`
            },
            channels: [config.mainchannelname]
        });
        /**
         * @type {Map<string, Command>}
         */
        this.commands = new Map();
    }

    /**
     * 
     * @param {string} command 
     */
    findCommand(commandname) {
        const cmd = this.commands.get(commandname);
        if (cmd === undefined) return null;
        return cmd;
    }

    RunBot() {
        //Обработчик команд
        const commandFiles = fs.readdirSync('./commands/')
            .filter(file => file.endsWith('.js'));

        /**
         * @type {Command[]}
         */

        const commands = commandFiles.map(file => require(`../commands/${file}`));

        commands.forEach(cmd => {
            console.log(`[INFO] Команда: ${cmd.name} была подключена!`);
            this.commands.set(cmd.name, cmd);
        })

        //Обработчик ивентов
        fs.readdirSync('./events/')
            .filter(file => file.endsWith('.js'))
            .forEach(file => {
                /**
                 * @type {Event}
                 */
                const event = require(`../events/${file}`);
                this.on(event.event, event.run.bind(null, this));
                console.log(`[Loading] Ивент: ${event.event} был загружен`);
            });

        this.connect().catch(err => {
            console.log(err);
        });
    }
}

module.exports = Client;