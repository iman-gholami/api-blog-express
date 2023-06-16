//create
const commentCtrl = async (req, res)=>{
    try {
        res.json({
            status: "success" ,
            data : "   comments routes"
        })
    }catch(err){
        res.json(err.message)
    }
}




