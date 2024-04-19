// Function Declaration
// no semi-colons needed at the end of function declarations.
// can be called before the lines of code it was defined at.
// This is done via hositing where the JS engine pushes function declarations to the top of our code 
// behind the scenes.
function walk(){
    console.log('walk');
}

// Anonymous Funtion Expression
// semi-colons should be at the end of curly-braces for function expressions
// cannot be called until after these lines are read
let run = function() {
    console.log('run');
}; 

// Named Funtion Expression
let sprint = function sprint (){
    console.log('sprint');
};

let move = run; // both of these refer to the same function in memory, so if you calle ither of them
// they will call the same function 

run();
move();