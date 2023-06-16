const express = require('express');
const {userLoinCtrl ,
    userRegisterCtrl ,
    userCtrl ,
    userDeletCtrl ,
    userUpdateCtrl, userProfieleCtrl, userLoginCtrl
} = require('../../controller/user/userCtrl');



const userRouter = express.Router();




userRouter.post('/register' ,userRegisterCtrl );

userRouter.post('/login',userLoginCtrl ) ;

userRouter.get('/profile/:id' ,userProfieleCtrl )


userRouter.get('/' ,userCtrl )


userRouter.delete('/:id' ,userDeletCtrl )

userRouter.put('/:id' ,userUpdateCtrl )








module.exports = userRouter;