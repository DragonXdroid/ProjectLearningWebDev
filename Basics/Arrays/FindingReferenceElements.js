const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },

];

const course = courses.find( function(course){
    course.name === 'a'
});

comsole.console.log(course); // returns the first object

const courseIndex = courses.findIndex( function(course){
    course.name === 'a'
});

comsole.console.log(course); // returns the first object's index

const arrowFunctions = courses.find(course => course.name === 'a') // simplify the whole thing with arrow expression