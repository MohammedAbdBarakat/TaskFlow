require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const corsOptions = require("./config/corsOptions"); //This to deny the request from specific origin. such ban ips from China.

const { logger } = require('./middleware/logEvents.js'); //To log the requests and events in a log file (for tracing).
const errorHandler = require('./middleware/errorHandler.js');
const verifyJWT = require('./middleware/verifyJWT.js');
const credentials = require('./middleware/credentials.js');
const connectDB=require('./config/dbConn');
const PORT= process.env.PORT || 6000 ;

const checkTech= require("./middleware/checkTech");
const taskRoutes = require('./routes/taskAPI/tasks');
const routineRoutes = require('./routes/routineAPI/routines');
const techniqRoutes= require("./routes/technAPI/techniques");

//express app
const app = express();

//Connect to MongoDB
connectDB();


//middlewares:
    //  logger:
app.use(logger);
    // Handle options credentials check - before CORS!
    // and fetch cookies credentials requirement
app.use(credentials);
    // Cross Origin Resource Sharing CORS
app.use(cors(corsOptions));

    // built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
    // built-in middleware for json 
app.use(express.json());
    // middleware for cookies
app.use(cookieParser());


//routes
    //Authentication && Authorization:
app.use("/api/login" , require("./routes/authAPI/auth")); //Post
app.use("/api/signup" , require("./routes/authAPI/register")); //Post
app.use("/api/logout" , require("./routes/authAPI/logout")); //Get
    //End of Authentication && Authorization
    
    //Now we need tokens to access these APIs
app.use(verifyJWT);
app.use(checkTech);
app.use('/api/routines',routineRoutes);
app.use("/api/techniques", techniqRoutes);
app.use("/api/tasks", taskRoutes) ;



//Any other request
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);


//IF there is no MongoDB connection , then there is no server !
mongoose.connection.once('open' , ()=>{
    console.log("MongoDB is connected!");
    app.listen(PORT, () => console.log(`Server running on https://localhost:${PORT}`));
})