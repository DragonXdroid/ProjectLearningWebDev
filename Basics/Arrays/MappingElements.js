const numbers = [2,4,5,6]

const items = numbers.map( number => '<li>' + number + '<li>')
const html = 'ul' + items.join(' ') + 'ul';

console.log(items)
console.log(html)


// mapping to objects
const objects = numbers.map( number => ({value : number}) ); 
// when returning a singular object keep it in parnethesis otherwise it will return undefined
