
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    diameter: 2
}

for (let key in circle){
    console.log(key, circle[key])
}

for (let key of Object.keys(circle)){
    console.log(key, circle[key])
}