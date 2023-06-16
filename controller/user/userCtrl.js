//user registration
const userRegisterCtrl = async (req, res) => {
    try {
        res.json({
            status : 'success',
            data : "user registered successfully"
        });
    }catch (err) {
        res.json(error.message);
    }
}

//user login
const userLoginCtrl = async (req, res) => {
    try {
        res.json({
            status : 'success',
            data : "user logged in successfully"
        });
    }catch (err) {
        res.json(error.message);
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