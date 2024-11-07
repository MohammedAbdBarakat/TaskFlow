const User= require("../../models/userSchema");
const bcrypt = require('bcrypt');


const handleSignup = async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body

    if (!userName || !password || !email || !firstName || !lastName) return res.status(400).json({ 'message': 'Username, password, email are required.' });
    
    // check for duplicate usernames in the db
    const duplicate = await User.findOne({email:email}).exec();

    if (duplicate) return res.sendStatus(409); //Conflict 
    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);
        
        //create and store the new user
        const result =await User.create( { 
            "firstName":firstName,
            "lastName":lastName,
            "userName": userName, 
            "password": hashedPwd,
            "email": email,
        });
        console.log( "New User registered:\n", result);
        
        res.status(200).json({ 'success': `New user created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleSignup };