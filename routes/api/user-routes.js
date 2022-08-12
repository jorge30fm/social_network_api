const router = require("express").Router();


// /api/users
router
        .route('/')
        .get() //get all users
        .post() //post new user

// /api/users/:userId
router
        .route('/:userId')
        .get() //get single user
        .put() //update user
        .delete() //remove user

// /api/users/:userId/friends/:friendId
router
        .route('/:userId/friends/:friendId')
        .post() // add a friend
        .delete() //remove a friend

module.exports = router;