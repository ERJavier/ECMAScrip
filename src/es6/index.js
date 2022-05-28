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