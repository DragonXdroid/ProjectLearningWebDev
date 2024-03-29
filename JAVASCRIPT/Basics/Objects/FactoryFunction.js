function createCircle(radius, location) {
    return {
        radius,
        location,
        draw() {
            console.log('draw')
        }
    };
}

const circle1 = createCircle(1, {x:2, y:3});
console.log(circle1)