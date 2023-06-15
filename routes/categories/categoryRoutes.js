const express = require("express");

const categoryRoutes = express.Router()


categoryRoutes.post('/' , (req, res)=>{
    try {
        res.json({
            status : "success" ,
            data : "category are created"
        })
    }catch (error){
        res.json(error.message)
    }
})
categoryRoutes.get('/:id' , (req, res)=>{
    try {
        res.json({
            status : "success" ,
            data : "category routes"
        })
    }catch (error){
        res.json(error.message)

    }
})

categoryRoutes.delete('/:id' , (req, res)=>{
    try {
        res.json({
            status : "success" ,
            data : "delete category routes"
        })
    }catch (error){
        res.json(error.message)

    }
})

categoryRoutes.delete('/:id' , (req, res)=>{
    try {
        res.json({
            status : "success" ,
            data : "delete category routes"
        })
    }catch (error){
        res.json(error.message)

    }
})

categoryRoutes.put('/:id' , (req, res)=>{
    try {
        res.json({
            status : "success" ,
            data : "update  category routes"
        })
    }catch (error){
        res.json(error.message)

    }
})











module.exports = categoryRoutes;