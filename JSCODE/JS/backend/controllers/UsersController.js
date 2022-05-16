let userService = require('../services/UserService');
const {config} = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async function( req,res,next)
{
    let userName = req.body['userName'];
    let password = req.body['password'];
    try
    {
        let user = await userService.register(userName,password);
        let payload = { id: user._id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({ token });
    }
    catch (err) {
        console.log(err)
        res.status(400).send({message:"User already existed"});
    }
}
const login = async function(req,res,next)
{
    let userName = req.body['userName'];
    let password = req.body['password'];
    try
    {
        let user = await userService.login(userName,password);
        let payload = { id: user._id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({ token });
    }
    catch (err) {
        console.log(err)
        res.status(404).send({message:"Invalid user"});
    }
}

module.exports = {
    registerUser,
    login,

}