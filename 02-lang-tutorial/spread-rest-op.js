// spread opreator
console.log("Spread operator:\n");

const oldArray = [1, 2, 3, 4];
const newArray = [...oldArray, 5, 6, 7, 8];
const oldObj = {
    name: "adam",
    color: "white"
}

const newObj = {
    ...oldObj,
    age: 31
}

console.log(oldArray);
console.log(newArray);
console.log(oldObj);
console.log(newObj);

// rest opreator

let func = (...args) => {
    console.log(args.filter(el => el === 1 || typeof el === "string"));
}

console.log("\nRest operator:\n")
func(1, 2, 3, 3, 4, "adam");