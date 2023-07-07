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
        //check if email is existing
        const userFound = await User.findOne({email})

        if (!userFound ) {
            return res.json({
                msg : "invalid login credentials"
            })
        }



        //verify password matches ;

        const isPasswordMatched = await bcrypt.compare(password, userFound.password);

        if ( !isPasswordMatched) {
            return res.json({
                msg : "invalid login credentials"
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
    console.log(req.params)
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