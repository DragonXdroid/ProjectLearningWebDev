let person = { name: 'mosh'};

Object.defineProperty(person, 'name', {
    writable: false, // makes it only readable, value cannot be changed
    enumerable: false, // determines if propety is iterable
    configurable: false // cannot be deleted
})

