function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0}; // let makes members private in classes
    let computeOptimumLocation = function() {
        // ...
    }
    this.draw = function() {
        computeOptimumLocation
        console.log('draw');
    }
}

const circle = new Circle(11);