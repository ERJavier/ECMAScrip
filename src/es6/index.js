function new (name, age, country){
 var name = name || 'oscar';
 var age = age || 32;
 var country = country || 'MX';
 console.log(name, age, country);
};

// es6

function newFunction2(name = 'oscar', age = '32', country = 'MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('ricardo', '23', 'CO');

let world = "World";
let hello = "Hello";
let EpicPhrase = hello + ' ' + world;
console.log(EpicPhrase);

let EpicPhrase2 = `${hello} ${world}`;
console.log(EpicPhrase2);


let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n"
+ "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);

let person = {
    'name' : 'Javier',
    'age' : 28,
    'country' : 'RD'
}

console.log(person.name, person.age, person.country);

//es6
let {name, age, country} = person;
console.log(name, age, country);

let team1 = ['Javier', 'Julian', 'Pedro'];
let team2 = ['Camila', 'Erika', 'Yesica'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global Var";
}

{
    var globalLet = "Global Let";
    console.log(globalLet);

}

console.log(globalVar);

var a = 'b';
a = 'a';
console.log(a);