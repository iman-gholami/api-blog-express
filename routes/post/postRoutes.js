const express = require('express');


const postRouter = express.Router()

//api routes for getting all posts
postRouter.get('/' ,(req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "all posts routes"
        })
    }catch(err){
        res.json(err.message)
    }
})


postRouter.get('/:id' ,(req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "single post routes"
        })
    }catch(err){
        res.json(err.message)
    }
})

postRouter.post('/' ,(req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "create post routes"
        })
    }catch(err){
        res.json(err.message)
    }
})

postRouter.delete('/:id' ,(req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "delete post routes"
        })
    }catch(err){
        res.json(err.message)
    }
})

postRouter.put('/:id' ,(req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "update  post routes"
        })
    }catch(err){
        res.json(err.message)
    }
})




















module.exports = postRouter ;