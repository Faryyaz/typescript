// Types

// string
let fName: string = "Tommy";

//number
let mAge: number = 60;

//boolean
let married: boolean = true;

//array
let food: string[] = ["peach", "lemon"];
let address: any[] = [7, "street"];

//tuples
let stuff:[string, number] = ["things", 7];

//enum
enum color {
    green, // 0
    blue, // 1
    red = 100, // 100,
    yellow // Automatically becomes 101, it increments the last number
}

let myColor: color = color.blue;
console.log(myColor); // returns 1

let myColor2: color = color.yellow;
console.log(myColor2); // returns 101

enum test {
    hey = "hello",
    phrase = "world"
}

console.log(test.hey); // hello
console.log(test.phrase); // world


// any
let car: any = "BMW";
car = {brand: "BMW", color: "White"};


//function
function printName(): string {
    return fName;
}

console.log(printName); // Tommy

//void
function sayHello(): void {
    console.log("Hello"); // Hello
}

//params types
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

console.log(multiply(2, 7)); // returns 14

//function types
let myMultiply: (val1: number, val2: number) => number;

// myMultiply = sayHello; // this wont work because we declared myMultiply with a function type
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2)); // returns 10

//objects
let userData:{name: string, age: number} = {
    name: "Max",
    age: 27
}

//complex object

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data:[10, 20, 30],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data:[10, 20, 30],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

//union types
let myRealAge: number | string = 27;
myRealAge = "27";
// myRealAge = true; // type error

//check types
let finalVal = "test";
if(typeof finalVal == "number") {
    console.log("It is a number");
} else {
    console.log("it is not a number");
}

// never type
function neverReturns(): never {
    throw new Error("Error!"); // never return a value
}

// null types
let cannotBeNull = 12;
// cannotBeNull = null; // gives an error because it was define as a number and cannot be of type null
let canAlsoBeNull;
canAlsoBeNull = null; // no error here
let canBeNull: number | null = 23;
canBeNull = null; // no errors here because we declared the types above
let canThisBeAny = null;
canThisBeAny = 12;
