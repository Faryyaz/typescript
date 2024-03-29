namespace MyMath {

    export namespace Circle {
        const PI: number = 3.142;

        export function calcCircumference(diameter: number): number {
            return PI * diameter;
        }
    }
}