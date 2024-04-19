// Define a constructor function for creating Circle objects
function Circle(radius) {
    // Define properties of the Circle object
    this.radius = radius; // Radius of the circle
    // Define a method for drawing the circle
    this.draw = function() {
        console.log('draw');
    };
}

// Method 1: Using Object.assign() to clone the Circle object
const circleClone = Object.assign({}, Circle);

// Method 2: Using Object.assign() to clone the Circle object with additional properties
const modifiedCircleClone = Object.assign({color: 'yellow', d: {d:'s'}}, Circle);
console.log(modifiedCircleClone)

// Method 3: Using object spread syntax ({...}) to clone the Circle object
const bestWayCircleClone = {...Circle}; 

// Explanation for each method:

// Method 1: Object.assign() creates a shallow copy of the circle object
// by copying all enumerable own properties to an empty object {}

// Method 2: Object.assign() with additional members creates a shallow copy of the circle object
// and adds an additional property 'color' to the cloned object

// Method 3: Object spread syntax provides a cleaner and simpler way to clone an object
// by spreading out all enumerable own properties of the circle object into a new object

// Additional comments:
// - Cloning objects is common in JavaScript to work with a copy of an object without modifying the original
// - Shallow cloning, as done with Object.assign() and object spread syntax, only creates copies of the object's properties at the top level
// - Nested objects or arrays within the original object will still be shared between the original and cloned objects
// - For deep copying, where nested objects and arrays are also cloned, more complex techniques like recursive functions or libraries like Lodash's _.cloneDeep() are needed
// - The choice of method depends on the specific use case and preferences, with the object spread syntax often offering a concise and readable way to clone objects


