const express = require('express');

const commentsRoutes = express.Router()


commentsRoutes.get('/:id' ,(req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "   comments routes"
        })
    }catch(err){
        res.json(err.message)
    }
})

commentsRoutes.post('/' ,(req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "comment create routes"
        })
    }catch(err){
        res.json(err.message)
    }
})
    commentsRoutes.delete('/:id' ,(req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "delete comments routes"
        })
    }catch(err){
        res.json(err.message)
    }
})
    commentsRoutes.put('/:id' ,(req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "update  comment routes"
        })
    }catch(err){
        res.json(err.message)
    }
})

module.exports = commentsRoutes ;