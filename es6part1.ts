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

//Destructuring
// arrays
const hobbies: string[] = ["sleeping", "dreaming"];
const [hb1, hb2] = hobbies;

console.log(hb1, hb2);
    
//objects
const userInfo: {firstName: string, ageNum: number} = {firstName: "Sam", ageNum: 35};
// const {firstName, ageNum} = userInfo; // without alias, should be same name as object keys
const {firstName: n, ageNum: a} = userInfo; // with alias 
console.log(n, a);