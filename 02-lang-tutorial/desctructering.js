// destructer

console.log("array desctructering:\n");

const array = ["adam", "dani", "tali"];

const [a, b] = array;

console.log(`${a} ${b}`);

console.log("object desctructering:\n");

const obj = {
    name: "Adam",
    age: 31
}

const {
    name
} = obj;


const {
    age
} = obj;

console.log(name);
console.log(age);