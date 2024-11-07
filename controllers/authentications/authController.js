const User =require("../../models/userSchema");
const Task = require("../../models/taskSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (_id ) => {
    return jwt.sign({_id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}


const handleLogin = async (req, res) => {
    //If any internal error happened , It would be handled by `errorHandler.js`
    const { userName, password } = req.body;
    if (!userName || !password) return res.status(400).json({ 'message': 'userName and password are required.' });
    
    const foundUser =await  User.findOne({userName: userName}).exec();
    if (!foundUser) return res.status(401).json({"message":"This email doesn't exist"}); //Unauthorized , User does not exist
    
    // evaluate password 
    const match = (await bcrypt.compare(password, foundUser.password));

    if (match) {
        
        // create JWTs
        const accessToken =createToken(foundUser._id);

            //This is for refresh Token (To avoid localStorage token for Front-End);
        // const refreshToken = jwt.sign(
        //     { "userName": foundUser.userName },
        //     process.env.REFRESH_TOKEN_SECRET,
        //     { expiresIn: '1d' }
        // );

        // // Saving refreshToken with current user
        // foundUser.refreshToken=refreshToken;
        // const result =await foundUser.save();
        // console.log(result);

        // res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None',  maxAge: 24 * 60 * 60 * 1000 }); //secure: true, for production
    
        res.status(200).json({ accessToken:accessToken , userID:foundUser._id  , userName:foundUser.userName});
    } else {
        res.status(401).json({"message":"Invalid Password"});//Unauthorized
    }
}

module.exports = { handleLogin };