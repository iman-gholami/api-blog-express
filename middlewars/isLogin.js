const geTokenFromHeader = require('../utils/getTokenFromHeader') ;
const verifyToken = require("../utils/verifyToken")




const isLogin = (req , res , next ) =>{
    const token = geTokenFromHeader(req) ;
    const decodedUser = verifyToken(token);
    req.userAuth = decodedUser.id ;

    if (!decodedUser) {
        return res.json ({
            message : "Invalid token/expired token , pleas try again to login  "
        });
    }else {
        next();
    }
}



module.exports = isLogin ;