const express = require('express');

const {
    createPostCtrl,
    postCtrl,
    deletePostCtrl,
    updatePostCtrl,
    singlePostCtrl,
} = require('../../controller/post/postCtrl')


const postRouter = express.Router()

//api routes for getting all posts
postRouter.get('/' ,postCtrl)


postRouter.get('/:id' ,singlePostCtrl)

postRouter.post('/' ,createPostCtrl)

postRouter.delete('/:id' ,deletePostCtrl)

postRouter.put('/:id' ,updatePostCtrl )




















module.exports = postRouter ;