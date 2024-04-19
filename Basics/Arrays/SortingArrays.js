const nums = [4,2,3];
nums.sort();
console.log(nums); // 2, 3, 4

nums.reverse();
console.log(nums) // 4, 3, 2


const courses = [
    {id: 1, name:'me'},
    {id: 2, name: 'ack'}
]

courses.sort((a, b) => {

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0
})

console.log(courses);