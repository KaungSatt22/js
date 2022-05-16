let movieService = require('../services/movieServices')

let movieController = async (req,res)=>{

    try{
        let movie =await movieService.getAllmovie()
        if(!movie) throw Error("No movies")
        await res.status(200).json(movie)
    }
    catch (err){
        await res.status(400).json({"messages":err})
    }
}
let movieIdController = async (req,res)=> {
    let movieId = req.params['movieId']
    try {
        let movies = await movieService.movieById(movieId)
        if(!movies)throw Error('No movies Found')
        await res.status(200).json(movies)
    }
    catch (err){
        await res.status(404).json({"message : ":err})
    }
}
let movieCreateController = async (req,res)=>{
    try {
        console.log(req.body)
        let movie = await movieService.createMovie(req.body)
        if(!movie) throw Error("Cannot Create Movie")
        await res.status(201).json(movie)
    }
    catch (err){
        await res.status(400).json({"message" : err})
    }
}

let movieUpdateController = async (req,res)=> {
    let movieId = req.params['movieId'];
    let movie = req.body;
    try {
        let updateMovie =await movieService.updateMovie(movieId,movie)
        if(!updateMovie)throw Error("Cannot Update Movie");
        await res.status(200).json(updateMovie)
    }
    catch (err){
        await res.status(400).json({"message " : err})
    }
}
let movieFindController = async (req,res) =>{
    let title = req.params['title']
    let movie =await movieService.searchMovieByTitle(title)
    try {
        if (!movie) throw Error ("No movie Found")
        await res.status(200).json(movie)
    }
    catch (err){
        await res.status(404).json({"message " : err})
    }
}
module.exports = {
    movieController,
    movieIdController,
    movieCreateController,
    movieUpdateController,
    movieFindController,

}