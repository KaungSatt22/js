const express = require('express')
const router = express.Router()
let movie = require('../controllers/movieControllers')
const movieController = require("../controllers/movieControllers");


router.get('/',movie.movieController)
router.get('/:movieId',movieController.movieIdController)
router.post('/',movieController.movieCreateController)
router.patch('/:movieId',movieController.movieUpdateController)
router.get('/title/:title',movieController.movieFindController)


module.exports = router;