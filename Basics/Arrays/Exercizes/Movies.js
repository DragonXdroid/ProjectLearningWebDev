const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2017, rating: 3.0}
]

function selectMovies(movies){
   return movies
        .filter((movie) => movie.year === 2018 && movie.rating >= 4)
        .sort((movie)=> movie.rating)
        .reverse()
        .map(movie => movie.title)

}

console.log(selectMovies(movies))

