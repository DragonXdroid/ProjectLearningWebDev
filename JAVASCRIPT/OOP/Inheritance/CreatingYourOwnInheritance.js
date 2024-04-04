function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate')
}


function Circle(radius, color){
    Shape.call(this, color )

    this.radius = radius
}

extend(Circle, Shape)
Circle.prototype.draw = function(){
    console.log('draw')
}


let me = new Circle(1, 'red')

