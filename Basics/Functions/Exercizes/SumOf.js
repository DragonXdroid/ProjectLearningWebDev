

function sumOf(...items){
    if (Array.isArray(array) && items.length === 1){
       items = [...items[0]];
    }
    return array.reduce(accumulator, current => { accumulator + current});
}