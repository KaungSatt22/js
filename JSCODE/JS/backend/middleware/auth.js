let config = require('../config/config');
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

let verfityuserToken = (req,res,next)=>{
    let token = req.header.authorization;
    if(!token) return res.status(401).send("Acces Denied");
    try {
        token = token.split(' ')[1]
        if(token == null || !token  ) return  res.status(401).send("UnAuthorized User");
        let verfiedUser = jwt.check(token,config.TOKEN_SECRET);
        if(!verfiedUser) return res.static(401).send("UnAuthorized User");
        req.user = verfiedUser;
        next();
    }
    catch (err){
        res.status(400).send("UnAuthorized User")
    }
}
module.exports ={
    verfityuserToken,

}