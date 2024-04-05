

class Shape {
    constructor(color){
        this.color = color
    }
}


const _diameter = new WeakMap(); // the underscore before the word is a common convention for private properties

class Circle extends Shape {
    constructor(color, raidus){
        super(color)
        this.radius = raidus;

        _diameter.set(this, this.raidus*2)
    }

    // methods automatically go on prototype
    draw() { 
        console.log('draw' + this.color);
    }

    drawDiameter(){
        console.log(_diameter.get(this))
    }

    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle('blue', radius)
    }
}

const circle = Circle.parse(` { "radius": 1 } `)
console.log(circle)

let c = new Circle('red', 1);
