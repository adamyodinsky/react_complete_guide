class Human {
  constructor(gender) {
    this.gender = gender;
  }

  getGender = () => {
    return this.gender;
  };

  toString = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  constructor(name, age, gender) {
    super(gender);
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log(this.name);
  }

  printAge() {
    console.log(this.age);
  }

  toString() {
    super.toString();
    console.log(super.getGender());
    console.log(`${this.name}, ${this.age} ${this.gender}`);
  }
}

p1 = new Person("Adam", 31, "male");
h1 = new Human("male");

// p1.printName();
// p1.printAge();

p1.toString();
h1.toString();