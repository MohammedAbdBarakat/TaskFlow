const User = require("../models/userSchema")
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login
loginUser = async (req, res) => {
    const {userName, password} = req.body

    try {
        const user = await User.login(userName, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({userName, token})
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }

}

//signup
signupUser = async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body
    
    try {
        const user = await User.signup(firstName, lastName, userName,email, password)
        
        //create a token
        const token = createToken(user._id)

        res.status(200).json({userName, token})
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser }