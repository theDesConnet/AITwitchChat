//Немного математики (c0d9d by DesConnet)
module.exports = {
    /**
     * 
     * @param {Number} min 
     * @param {Number} max 
     * @returns
     */
    getRandomInRange: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * @param {Array} array
     * @returns
     */
    choice: function (array) {
        const index = this.getRandomInRange(0, array.length-1);
        return array[index];
    }
}