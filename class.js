class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {  // an introduceSelf() method that can refer to the object's properties using this.

      console.log(`Hi! I'm ${this.name}`);
    }
  }
  

  class Professor extends Person {
    teaches;
  
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(
        `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
      );
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  }
  