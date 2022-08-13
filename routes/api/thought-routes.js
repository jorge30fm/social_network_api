const router = require("express").Router();
const { getAllThoughts, addThought, getThoughtById, editThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/tought-controller')

// /api/thoughts
router
        .route('/')
        .get(getAllThoughts) // get all thoughts
        .post(addThought); //post one thought

// /api/thoughts/:thoughtId
router
        .route('/:thoughtId')
        .get(getThoughtById) //get single thought
        .put(editThought) //update thought
        .delete(deleteThought) //delete thought
        .post(addReaction) //post reaction

router
        .route('/:thoughtId/reactions/:reactionId')
        .delete(deleteReaction) //delete reaction

module.exports = router;