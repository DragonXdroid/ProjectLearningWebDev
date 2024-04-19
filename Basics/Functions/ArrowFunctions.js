

const double = a => a * 2; // if there is only one parameter then we can leave off {} and () and no return statment if it is a one liner

const zero = () => 0; // if no parameters at all we have to specify parethesis. leave off {} and no return statement either

const multiply = (num, power) => num * power; // we need parenthesis here 

const objMethod = greet => ({name: greet}) // we need parenthesis around the object if returning an object in a one liner