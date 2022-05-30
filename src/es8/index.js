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


const HelloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await HelloWorld();
    console.log(hello)
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await HelloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();