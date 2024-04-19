
function showProperties(object) {
    for (key in object) {
        if (typeof (object[key]) === "string") {
            console.log(key, object[key])
        }
    }
}

let movie = {
    name: 'a',
    age: true,
    size: 'large'
}

showProperties(movie)
