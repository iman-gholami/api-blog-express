const createPostCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "create post routes"
        })
    }catch(err){
        res.json(err.message)
    }
}


//single post

const singlePostCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "single post routes"
        })
    }catch(err){
        res.json(err.message)
    }
}







//Delete a post

const deletePostCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "delete post routes"
        })
    }catch(err){
        res.json(err.message)
    }
}







//post update
const updatePostCtrl =     async (req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "update  post routes"
        })
    }catch(err){
        res.json(err.message)
    }
}



//all post
const postCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "all posts routes"
        })
    }catch(err){
        res.json(err.message)
    }
}


module.exports = {
    createPostCtrl,
    postCtrl,
    deletePostCtrl,
    updatePostCtrl,
    singlePostCtrl,

}