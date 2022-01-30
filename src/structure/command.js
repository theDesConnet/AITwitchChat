const Client = require('./client.js');
const tmi = require('tmi.js');

/**
 * 
 * @param {Client} client 
 * @param {String[]} args
 * @param {string} channel 
 * @param {tmi.ChatUserstate} tags 
 * @param {string} message 
 * @param {boolean} self 
 */
function CommandExecute(client, args, channel, tags, message, self) {}

class Command {
    /**
     * @typedef {{name: string, description: stirng execute: CommandExecute}} CMDOptions
     * @param {CMDOptions} options 
     */
     constructor(options) {
         this.name = options.name;
         this.description = options.description;
         this.execute = options.execute;
     }
}

module.exports = Command;