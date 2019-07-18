//Simple Generic

function echo(data: any) {
    return data;
}

console.log(echo("Max").length); // 3
console.log(echo(27).length); // undefined, the problem here length is not applicable to the type number
console.log(echo({name: "test", age: 20}));

//Better Generic
// when specifying type T, it takes into consideration the type of data being passed as param
// so the ide gives better suggesting when typing . after the function call
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max").length); // 3
// console.log(betterEcho(27).length); // length does not exist on type 27
console.log(betterEcho<number>(27)); // you can specify the type, here of type number
console.log(betterEcho<Object>({name: "test", age: 20})); // of type object

// built-in generics

const testResult: Array<number> = [2, 1.99];
testResult.push(29);
// testResult.push("stasd"); // ide is complaining, cant push string to type number right?
console.log(testResult);

// generic type arrays
function printAll<T>(args: T[]) {
    args.forEach(
        (element) => console.log(element)
    );
}

printAll<string>(["Test", "Glksd"]);

// Generic types use
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("something"));


// Generic Class

class SimpleMath<T extends number> {
    value1: T;
    value2: T;

    calcul() {
        return this.value1 * this.value2;
    }
}

const simpleMath = new SimpleMath<number>();
simpleMath.value1 = 10;
simpleMath.value2 = 2;
console.log(simpleMath.calcul());

// using multiple types
class SimpleCalculation<T extends number | string, U extends number | string> {
    num1: T;
    num2: U;

    init() {
        return +this.num1 * +this.num2;
    }
}

const simpleCalculation = new SimpleCalculation<number, string>();
simpleCalculation.num1 = 4;
simpleCalculation.num2 = "7";
console.log("My simple: " + simpleCalculation.init());

//exercise on generic
class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printAll() {
        for(let key in this.map) {
            console.log(key, this.map[key]);
        }
    }

}

// number
const myMap = new MyMap<number>();
myMap.setItem("Apples", 7);
myMap.setItem("Orange", 5);
console.log(myMap.getItem("Orange")); //5
myMap.printAll();
myMap.clear();
myMap.printAll(); // null

// string
const myMap2 = new MyMap<string>();
myMap2.setItem("Apples", "7");
myMap2.setItem("Orange", "5");
console.log(myMap2.getItem("Orange")); //5
myMap2.printAll();
myMap2.clear();
myMap2.printAll(); // null
