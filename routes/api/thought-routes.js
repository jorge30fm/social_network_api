const router = require("express").Router();

// /api/thoughts
router
        .route('/')
        .get() // get all thoughts
        .post(); //post one thought

// /api/thoughts/:thoughtId
router
        .route('/:thoughtId')
        .get() //get single thought
        .put() //update thought
        .delete() //delete thought

// /api/thoughts/:thoughtId/:reactionId
router
        .route('/:thoughtId/:reactionId')
        .post() //post reaction
        .delete() //remove thought

router
        .route('/:thoughtId/reactions/:reactionId')
        .delete() //delete reaction

module.exports = router;