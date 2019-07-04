//let is blocked scoped
let age = 6;

function showAge() {
    // console.log(age); // undefined
    let age = 7;
    console.log(age);
}

//const
const gravity = 10;
// gravity = 11; // its a constant cannot be overwritten


// arrow functions
const multiplier = (value1: number, value2: number): number => {
    return value1 * value2
};
console.log(multiplier(2, 7));

const greet = (message: string) => {
 return message;
}

// default parameters

const counter = (number: number = 20) => {
    while(number > 0) {
        number --;
    }
    return number;
};

console.log(counter); // return 0


// REST & SPREAD
const numbers = [10, 20, 7, 5];
console.log(Math.max(...numbers)); // spread when in function call (notice ...)

const makeArray = (...args: number[]) => { // rest when not in function call (notice ...)
    return args;
}
console.log(makeArray(2, 3, 4)); // returns an array ->[2,3,4]
