type _logged = (constructorFn: Function) => void;

let logged: _logged = (constructorFn) => {
    console.log(constructorFn);
}

@logged
class Login {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

//Factory
let logging = (value: boolean): _logged | null => {
    return value ? logged : null;
}

@(<any>logging(false)) // cast logging
class Portal {

}

//advance
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@printable
class Planting {
    name: string = "Green herb";
}

const planting = new Planting();
(<any>planting).print();

//Method decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

//property decorator
function overwritable(value: boolean): any {
    return function(target: any, propName: string) {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}

// parameter decorator
function printInfo(target: any, methodName: string, parameterIndex: number) {
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("parameterIndex: ", parameterIndex);
}

class Renovation {
    @overwritable(true)
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @editable(true)
    calcBudget() {
        console.log("20M");
    }

    printBudget(mode: string, @printInfo printAll: boolean) {
        if(printAll) {
            console.log(10000);
        } else {
            console.log(4777);
        }
    }


}

const renovation = new Renovation("Super renovation");
renovation.calcBudget();
renovation.calcBudget = function() { // if editable true, we can overwrite the function.
    console.log("80M");
}
renovation.calcBudget();
console.log(renovation);
renovation.printBudget("any", true);
renovation.printBudget("any", false);