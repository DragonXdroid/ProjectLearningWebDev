// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const anotherCircle = new Circle(2)