const jwt = require("jsonwebtoken")
require("dotenv").config()


const verifyToken = async (req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers[process.env.TOKEN_HEADER_KEY]
    if (!token){
        return res.status(403).send("You Need To Login")
    }
    try {
        const decoded = await jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user= decoded
        console.log("authentication succeeded ")
    } catch (error) {
        console.log(error)
        return res.status(401).send("Invalid Token");
        
    }

    return next()
}   

module.exports= verifyToken