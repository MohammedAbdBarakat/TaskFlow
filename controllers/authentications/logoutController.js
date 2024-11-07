const User= require('../../models/userSchema');


const handleLogout = async (req, res) => {


    res.status(200).json({"message":"Log out successed"});
        //This is for logout , Require refreshToken.
    // // On client, also delete the accessToken
    // const cookies = req.cookies;
    // if (!cookies?.jwt) return res.sendStatus(204); //No content , Already out
    
    // const refreshToken = cookies.jwt;

    // // Is refreshToken in db?
    // const foundUser = await User.findOne({refreshToken: refreshToken});

    // if (!foundUser) {
    //     res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    //     return res.sendStatus(204);
    // }

    // // Delete refreshToken in db
    // foundUser.refreshToken='';
    // const result =await foundUser.save();
    // console.log(result);
    // res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    // res.sendStatus(204);
}

module.exports = { handleLogout }