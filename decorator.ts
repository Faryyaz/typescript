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

@logging(false)
class Portal {

}