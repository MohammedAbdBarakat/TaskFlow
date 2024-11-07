const mongoose= require('mongoose');


const connectDB= async ()=>{
    
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });    
    } catch (error) {
        console.log("HAHA no Connection");
        console.error(error);
    }
}


module.exports= connectDB;