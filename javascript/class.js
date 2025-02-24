//class is a blue print of an object
// class Car {
//   constructor(brand, milage) {
//     console.log("new object is created");
//     this.brandName = brand;
//     this.milage = milage;
//   }
//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("Stop");
//   }
//   //   setBrand(brand) {
//   //     this.brandName = brand;
//   //   }
// }

// let suzuki = new Car("Maruti", 20);
// suzuki.start();
// // suzuki.setBrand("Maruti");
// console.log(suzuki);

// let innova = new Car("Toyota", 12);
// console.log(innova);
// //

// inheritance

class Person {
  constructor(name) {
    console.log("enter parent constructor");
    this.name = name;
    this.Species = "homo sapines";
  }
  eat() {
    console.log("eating");
  }

  sleep() {
    console.log("sleeping");
  }
  work() {
    console.log("nothing");
  }
}

class Engineer extends Person {
  constructor(branch, name) {
    console.log("enter chiled constructor");
    super(name);
    this.branch = branch;
    console.log("exit chiled constructor");
  }
  // name mai ne pass kiya engg cons me declere hai person me
  // isi liye super cons me name parameter pass liya ager nahi kiya to undefine aaye ga
  work() {
    super.eat();
    console.log("solve problems build something");
  }
}

let faaiz = new Engineer("computer engg", "firoz");
faaiz.work(); // super class me mrthods use karne ke liye use karte hai
console.log(faaiz);

class Doctor extends Person {
  work() {
    console.log("treat petients");
  }
}

let dr = new Doctor();
dr.work();
console.log(dr.Species);
