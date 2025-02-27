import jwt from 'jsonwebtoken'

// admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        
        const {authtoken} = req.headers
        console.log(req.headers);
        if(!authtoken) {
            res.json({success: false, message: "Not authorized, You must sign in again"})
        }

        const token_decode = jwt.verify(authtoken, process.env.JWT_SECRET)

        if(token_decode != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            res.json({success: false, message: "Your credential token is not valid, You must sign in again"})
        }

        next()

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export default authAdmin