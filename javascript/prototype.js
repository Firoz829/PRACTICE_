// a js object have special property called prototype
// we can set prototype using __proto__

// object
const employee = {
  calTax() {
    console.log("tax rate is 10%");
  },
  // calTax2: function () {
  //   console.log("tax rate is 20%");
  // },
};

// uper we can create functions like this

const firoz = {
  salary: 50000,
};

const altamash = {
  salary: 50000,
};
const shafique = {
  salary: 50000,
};

firoz.__proto__ = employee;
shafique.prototype = employee;
altamash.__proto__ = employee;  

// Adding a method to the prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  return `Hello, my name is ${this.name}`;
};

const person1 = new Person("Alice", 25);
console.log(person1.sayHello()); // Output: Hello, my name is Alice

const animal = {
  makeSound: function () {
    console.log("Some generic animal sound");
  },
};

// creating obj
const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof! Woof!");
};

dog.makeSound(); // Output: Some generic animal sound
dog.bark(); // Output: Woof! Woof!
