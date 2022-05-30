const data = {
    frontend: 'Javier',
    backend: 'Javi',
    design: 'Kirbel',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Javier',
    backend: 'Javi',
    design: 'Kirbel',
}

const value = Object.values(data);
console.log(value);
console.log(value.length);


const string = 'hello';
console.log(string.padStart(7, 'hi '));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, ' ------'));

const obj = {
    name: 'javier',
}