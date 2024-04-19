let numbers = [1,2,3,4] // how do we empty this array, there are 4 options

//solution 1 (only works when they are no other references to the original array )
numbers = [];

// solution 2
numbers.length = 0;

// solution 3 - splicing
numbers.splice(0, numbers.length);

// solution 4
while (numbers.length > 0){
    numbers.pop();
}
