const router = require("express").Router();
const { getAllThoughts, addThought, getThoughtById, editThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/tought-controller')

// /api/thoughts
router
        .route('/')
        .get(getAllThoughts) // get all thoughts

router.
        route('/:userId')
        .post(addThought); //post one thought

router
        .route('/:userId/:thoughtId')
        .delete(deleteThought) //delete thought

// /api/thoughts/:thoughtId
router
        .route('/:thoughtId')
        .get(getThoughtById) //get single thought
        .put(editThought) //update thought
        .post(addReaction) //post reaction

router
        .route('/:thoughtId/reactions/:reactionId')
        .delete(deleteReaction) //delete reaction

module.exports = router;