const color = 'red' // global scope
// avoid global variables as it is considered bad practice

function start() {
    const message = 'hi' // scope is only local to this function

    if(true){
        const another = 'bye'; // scope is local to this if-statment
        const message = 'e'

    }

}

start();