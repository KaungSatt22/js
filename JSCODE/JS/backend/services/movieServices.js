let movieSchema = require('../model/movieSchema')

let getAllmovie = async () =>{
    return movieSchema.find()
}

let movieById = async (movieId) => {
    return movieSchema.findById(movieId)
}
let createMovie = async (movie) =>{
    let newMovie = movieSchema(movie)
    return newMovie.save();
}
let updateMovie = async (movieId,movie)=>{
    let newMovie = await movieSchema.findByIdAndUpdate(movieId, movie,{new: true});
    return newMovie
}

const searchMovieByTitle = async(movieTitle)=>
{
    const movies = await movieSchema.find({
        title: {
            $regex:movieTitle
        }
    });
    return  movies;
}


module.exports = {
    getAllmovie,
    movieById,
    createMovie,
    updateMovie,
    searchMovieByTitle,


}