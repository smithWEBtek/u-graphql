const Movie = require('../model/model')

// const movies = [
//   { id: 1, name: "Parabellum", genre: "Action", year: 2019, imageUrl: "https://tinyurl.com/pbjk6r9f" },
//   { id: 2, name: "Jaws", genre: "Action", year: 1974, imageUrl: "https://tinyurl.com/3amsdez5" },
//   { id: 3, name: "Rob Roy", genre: "Drama", year: 1996, imageUrl: "https://tinyurl.com/y7ytjd6a" },
//   { id: 4, name: "Jurassic Park", genre: "Action", year: 1993, imageUrl: "https://tinyurl.com/53yvbjs3" },
//   { id: 5, name: "Succession", genre: "Drama", year: 2020, imageUrl: "https://tinyurl.com/yeb2cddn" },
// ]
// const movies = [
// (name: "Parabellum", genre: "Action", year: 2019, imageUrl: "https://tinyurl.com/pbjk6r9f")
// (name: "Jaws", genre: "Action", year: 1974, imageUrl: "https://tinyurl.com/3amsdez5")
// (name: "Rob Roy", genre: "Drama", year: 1996, imageUrl: "https://tinyurl.com/y7ytjd6a")
// (name: "Jurassic Park", genre: "Action", year: 1993, imageUrl: "https://tinyurl.com/53yvbjs3")
// (name: "Succession", genre: "Drama", year: 2020, imageUrl: "https://tinyurl.com/yeb2cddn")
// ]

const resolvers = {
  movies: () => {
    // return movies
    return Movie.find({})
  },
  addMovie: (args) => {
    let movie = new Movie({
      name: args.name,
      genre: args.genre,
      year: args.year,
      imageUrl: args.imageUrl,
    })
    movie.save()
    return movie
  }

}

module.exports = resolvers
