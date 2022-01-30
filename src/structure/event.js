const tmi = require('tmi.js');
const Client = require('./client.js');

/**
 * @template {keyof tmi.Events} K
 * @param {Client} client 
 * @param  {tmi.Events[K]} eventArgs 
 */
function RunEvent(client, ...eventArgs) {}

/**
 * @template {keyof tmi.Events} K
 */
class Event {
    /**
     * 
     * @param {K} event 
     * @param {RunEvent<K>} runFunction 
     */
     constructor(event, runFunction){
        this.event = event;
        this.run = runFunction
    }
}

module.exports = Event;