const router = require("express").Router();
const {
        getAllUsers,
        getUserById,
        addUser,
        removeUser,
        updateUser,
        addFriend,
        removeFriend
} = require('../../controllers/user-controller')

// /api/users
router
        .route('/')
        .get(getAllUsers) //get all users
        .post(addUser) //post new user

// /api/users/:userId
router
        .route('/:userId')
        .get(getUserById) //get single user
        .put(updateUser) //update user
        .delete(removeUser) //remove user

// /api/users/:userId/friends/:friendId
router
        .route('/:userId/friends/:friendId')
        .put(addFriend) // add a friend
        .delete(removeFriend) //remove a friend

module.exports = router;