
var x = 3; // we used to use the var keyword but there are issue associated with it, so from ES6 and onwards we will use the let keyword

let y = 4; 
console.log(y)

const taxRate = 200; // makes it unchangeable

let name = 'Mee';
let age = 30;
let isApproved = true;
let firstName = undefined
let selectedColor = null;

// Javascrippt is dynamically typed

let person = {
    name: 'mosh',
    age: 30
};


console.log(person.name);
person['name'] = 'ray';

let theColor = ['red','blue'];

function greet (name) {
    console.log("hey " + name);
}


greet("meat")