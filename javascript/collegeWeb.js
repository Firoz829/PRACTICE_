let DATA = "some personal data";

class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data id " + DATA);
  }
}

let student1 = new user("firoz", "frioz123@");
let student2 = new user("fayaz", "fayaz123@");

let teacher1 = new user("gaffar", "gaffar@123@");

// console.log(student1);
// console.log(student2);
// console.log(teacher1);

class Admin extends user {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "edited data";
  }
}

let Admin1 = new Admin("Admin1", "admin@123");
console.log(Admin1);
