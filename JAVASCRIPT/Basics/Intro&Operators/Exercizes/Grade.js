function calculateGrade(marks){
    let sum = 0;
    for( grade of marks){
        sum += grade;
    }
    let average = sum/marks.length;
    if(average < 60) return 'F'
    if(average < 70) return 'D'
    if(average < 80) return 'C'
    if(average < 90) return 'B'
    if(average <= 100) return 'A'

}

let x =calculateGrade([2000,30,50])
console.log(x)