const User = require('../../model/User/User')
const bcrypt = require('bcrypt')

//user registration
const userRegisterCtrl = async (req, res) => {
        const {firstname , lastname , email , password} = req.body



    try {
            const userFound  = await User.findOne({email})
            if (userFound){
                return res.json({
                    msg : "This user is already exists"
                })
            }
            const saltRounds = 10;
            const hashPassword = await bcrypt.hash(password , saltRounds)


            const user = await User.create({
                firstname ,
                lastname ,
                email ,
                password : hashPassword
            })
        res.json({
            status : 'success',
            data : user ,
        });
    }catch (err) {
        res.json(err.message);
    }
}

//user login
const userLoginCtrl = async (req, res) => {
    const {email , password} = req.body
    try {
        const userFound = await User.findOne({email})
        if (!userFound) {
            res.json({
                msg: "wrong email"
            });
        }

        const userisPassword = await User.findOne({password})
        if (!userisPassword){
            res.json({
                msg : "wrong pass "
            })
        }


        res.json({
            status : 'success',
            data : "user logged in successfully"
        });
    }catch (err) {
        res.json(err.msg);
    }
}
//user profile
const userProfieleCtrl = async (req, res)=>{
    try {
        res.json({
            status : "sucsess" ,
            data : "profiel route"
        });
    }catch (error){
        res.json(error.message)
    }
}
//all
const userCtrl = async (req, res) => {
    try {
        res.json({
            status : 'success',
            data : "alll user route"
        });
    }catch (err) {
        res.json(err.message)
    }
}
//delete user
const userDeletCtrl = async (req, res)=>{

    try {
        res.json({
            status : "sucsess" ,
            data : "delet user route "
        });
    }catch (err){
        res.json(err.message)
    }

}

//update user

const userUpdateCtrl = async (req, res)=>{
    const {firstname , lastname , email , password} = req.body

    try {
        res.json({
            status : "sucsess" ,
            data : "update user route"
        });
    }catch (error){
        res.json(error.message)
    }
}

module.exports = {
    userRegisterCtrl,
    userLoginCtrl,
    userProfieleCtrl,
    userCtrl,
    userDeletCtrl ,
    userUpdateCtrl

}