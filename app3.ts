namespace MyMath {
    const PI: number = 3.142;

    export function calcCircumference(diameter: number): number {
        return PI * diameter;
    }

    export function calcArea(width: number = 10, length: number = 20): number {
        return width * length;
    }

}

console.log(MyMath.calcArea());
console.log(MyMath.calcCircumference(4));
// console.log(MyMath.PI); // cant access it because it has not been exported