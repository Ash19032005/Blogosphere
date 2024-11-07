import mongoose from "mongoose";
export const connectDB=async()=>{
       await mongoose.connect('mongodb+srv://ashwinsk1905:h2iTbleny2ohrkCP@cluster0.1hkske9.mongodb.net/');
       console.log("DB connected");
}