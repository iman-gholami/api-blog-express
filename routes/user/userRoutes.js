const express = require('express');
const {userLoinCtrl ,
    userRegisterCtrl ,
    userCtrl ,
    userDeletCtrl ,
    userUpdateCtrl, userProfieleCtrl, userLoginCtrl
} = require('../../controller/user/userCtrl');


const isLogin = require('../../middlewars/isLogin')



const userRouter = express.Router();




userRouter.post('/register' ,userRegisterCtrl );

userRouter.post('/login', userLoginCtrl)
userRouter.get('/profile/',isLogin ,userProfieleCtrl )


userRouter.get('/' ,userCtrl )


userRouter.delete('/:id' ,userDeletCtrl )

userRouter.put('/:id' ,userUpdateCtrl )








module.exports = userRouter;