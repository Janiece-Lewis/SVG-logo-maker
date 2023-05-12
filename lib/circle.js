// imports our Shape class 
const Shapes = require('./shapes')

// creates our 'circle' subclass
class Circle extends Shapes {
    // so when a shape is made, a color param is needed
    constructor(color) {
        // gets constructor/functionality from parent class 
        super(color);
    }
    // render method to return string of svg   
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// exports this Class so it can be used in other files
module.exports = Circle