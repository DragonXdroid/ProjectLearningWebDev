// This is an Immediately Invoked Function Expression (IIFE).
// It's a function expression that is immediately invoked after it's defined.
(function () {
    // Inside the function, a variable 'user' is declared and assigned the value "tim".
    const user = "tim";
    
    // The value of 'user' is then logged to the console.
    console.log(user);
})();

// The IIFE helps in encapsulating code and creating a private scope for variables.
// In this case, 'user' is scoped within the function and cannot be accessed from outside.
// It's commonly used to avoid polluting the global namespace and to keep variables private.
