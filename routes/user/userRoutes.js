const express = require('express');


const userRouter = express.Router();




userRouter.post('/register' , (req, res) => {
    try {
        res.json({
            status : 'success',
            data : "user registered successfully"
        });
    }catch (err) {
        res.json(error.message);
    }
});

userRouter.post('/login', (req, res) => {
    try {
        res.json({
            status : 'success',
            data : "user logged in successfully"
        });
    }catch (err) {
        res.json(error.message);
    }
})

userRouter.get('/profile/:id' , (req, res)=>{
    try {
        res.json({
            status : "sucsess" ,
            data : "profiel route"
        });
    }catch (error){
        res.json(error.message)
    }
})


userRouter.get('/' , (req, res) => {
    try {
        res.json({
            status : 'success',
            data : "alll user route"
        });
    }catch (err) {
        res.json(err.message)
    }
})


userRouter.delete('/:id' , (req, res)=>{

    try {
        res.json({
            status : "sucsess" ,
            data : "delet user route "
        });
    }catch (err){
        res.json(err.message)
    }

})

userRouter.put('/:id' , (req, res)=>{
    try {
        res.json({
            status : "sucsess" ,
            data : "update user route"
        });
    }catch (error){
        res.json(error.message)
    }
})








module.exports = userRouter;