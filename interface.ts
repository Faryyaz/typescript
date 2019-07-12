interface Individual {
    name: string;
}

export function sayGreetings(individual: Individual) {
    console.log("Hello " + individual.name);
}

export function changeName(individual: Individual) {
    individual.name = "Tommy";
}


//optional properties
interface Personality {
    name: string;
    age?: number; // age is optional

    // this is a unknown property that we can declare later, 
    //we dont know the type either thats why it is any, this is not an array!
    // kind of dynamic property
    [property: string]: any; 


    // functions
    improvePersonality(firstName: string): void;
}

export function testPersonality(personality: Personality) {
    console.log(personality.name);
}
