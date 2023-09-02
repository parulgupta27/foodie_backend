import mongoose from "mongoose";

const user=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        require:true,
        default:Date.now(),
    },
    updated_at:{
        type:Date,
        require:true,
        default:Date.now(),
    } 
});
export default mongoose.model("user",user);