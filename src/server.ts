import "dotenv/config";
import env from "./util/validateEnv";
import app from "./app";
import mongoose  from "mongoose";



const expressPORT : number = env.EXPRESS_PORT;
const mongoURI : string = env.MONGO_CONNECTION_STRING;


mongoose.connect(mongoURI).then(() => {
    console.log("Mongoose connected");
    app.listen(expressPORT, () =>{ console.log("Express connected to port: ", expressPORT); });
    
})