let express = require("express")
let router = express.Router()

router.get('/:userId(\\d+)',(req,res,next)=>{
    let userid = req.params.userId;
    console.log(userid)
    if(userid == 1){
        next()
    }
    else{
        res.status(401).send("Unauthorized User");
    }
},(req,res,next)=>{
    res.send("Secret")
})

module.exports = router