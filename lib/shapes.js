// This files is for the parent class of our shape sub classes

// added color as a constructor to build shape
class Shapes {
    constructor(color) {
      this.color = color;
    }
  
// so color is changed when user selectsa specific color
    setColor(color) {
      this.color = color;
    }
}
    //   const test = new Shapes('blue')
    //   console.log(test.color)
    //   console.log(test)
    //   test.setColor('red')
    //   console.log(test.color)
    //   console.log(test)

// exports this Class so it can be used in other files
module.exports = Shapes
    
  