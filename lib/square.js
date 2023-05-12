// imports our shape class
const Shapes = require('./shapes')

// creates our 'square' subclass
class Square extends Shapes {
    constructor(color) {
        // calls the super class constructor and passes in the color parameter
        super(color);
    }
    // render method to return string of svg
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;

    }
}

// exports this Class so it can be used in other files
module.exports = Square