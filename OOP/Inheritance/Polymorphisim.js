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

// make circle
function Circle(radius, color){
    Shape.call(this, color )
    this.radius = radius
}

extend(Circle, Shape)

Circle.prototype.duplicate = function(){
    console.log('Duplicate CIRCLE')
}


// make square
function Square(radius, color){
    Shape.call(this, color )
    this.radius = radius
}

extend(Square, Shape)

Square.prototype.duplicate = function(){
    console.log('duplicate SQUARE')
}


// polymorphisim
let list = [new Circle(), new Square()];

for (let item of list){
   item.duplicate()
}

