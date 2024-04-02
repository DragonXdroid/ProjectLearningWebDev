function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.location = { x:1 }; // acessing properties via dot notation
circle['location'] = { x:1}; // acessing properties via bracket notation

delete circle['location'];
