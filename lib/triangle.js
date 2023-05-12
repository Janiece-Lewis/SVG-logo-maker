// imports our shape class
const Shapes = require('./shapes')


class Triangle extends Shapes {
    constructor(color) {
        // calls the super class constructor and passes in the color parameter
        super(color);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`

    }
}
// exports this Class so it can be used in other files
module.exports = Triangle