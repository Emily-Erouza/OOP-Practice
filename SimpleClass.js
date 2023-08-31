class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`Perimeter of ${this.name} is ${perimeter}`);
    }
  }
  
  // Create an instance of the Shape class called 'square'
  const square = new Shape('square', 4 , 5);
  
  // Call calcPerimeter() on the square instance
  square.calcPerimeter();
  
  // Create another instance of the Shape class called 'triangle'
  const triangle = new Shape('triangle', 3, 3);
  
  // Call calcPerimeter() on the triangle instance
  triangle.calcPerimeter();
  



//   class Shape {
//     constructor(name, sides, sideLength) {
//       this.name = name;
//       this.sides = sides;
//       this.sideLength = sideLength;
//     }
  
//     calcPerimeter() {
//       const perimeter = this.sides * this.sideLength;
//       console.log(`Perimeter of ${this.name} is ${perimeter}`);
//     }
//   }
  
//   class Square extends Shape {
//     constructor(sideLength) {
//       super('square', 4, sideLength);
//     }
  
//     calcArea() {
//       const area = this.sideLength * this.sideLength;
//       console.log(`Area of square is ${area}`);
//     }
//   }
  
//   // Create an instance of the Square class called 'square'
//   const square = new Square(5);
  
//   // Call calcPerimeter() and calcArea() on the square instance
//   square.calcPerimeter();
//   square.calcArea();
  