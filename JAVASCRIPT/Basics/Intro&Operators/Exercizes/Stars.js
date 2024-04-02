function showStars(number){
    for (let i = 1; i <= number; i++){
        let pattern = ''
        for (let j = 1; j <= i; j++){
            pattern += '*'
        }
         console.log(pattern)
    }
}

showStars(5)