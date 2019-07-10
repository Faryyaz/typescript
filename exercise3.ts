// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
 
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
 
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }

class Car {
    private name: string | null = null;
    public acceleration: number = 0;

    public constructor(name: string) {
        this.name = name;
    }

    public accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }

    public honk() {
        console.log("Toooooooooot!");
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };

class BaseObject {
    public width: number = 0;
    public length: number = 0;

    public constructor() {}
}

class Rectangle extends BaseObject {
    public width: number = 5;
    public length: number = 2;

    public constructor() {
        super();
    }

    public calcSize() : number {
        return this.width * this.length;
    }
}

var rectangle = new Rectangle();
console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });

/**
 * Person
 */
class Person {
    private _firstName: string = "";
    public enumerable: boolean = true;
    public configurable: boolean = true;

    /**
     * Getter
     */
    get firstName(): string {
        return this._firstName;
    }

    /**
     * Setter
     */
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }

}

var person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);