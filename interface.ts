interface Individual {
    name: string;
}

export function sayGreetings(individual: Individual) {
    console.log("Hello " + individual.name);
}

export function changeName(individual: Individual) {
    individual.name = "Tommy";
}

