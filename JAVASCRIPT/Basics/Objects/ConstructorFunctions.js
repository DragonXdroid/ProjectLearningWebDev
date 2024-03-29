function Circle (radius){
    this.radius = radius,
    this.draw = function() {
        console.log('draw')
    }
}

Circle.call({}, 2);


const circle = new Circle(1);
circle.draw()
