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