const mongoose =require("mongoose");
const bcrypt = require('bcrypt')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// hasing the password

userSchema.pre('save',async function (next) {
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,10)
    }
    next();
})
const User=new mongoose.model("users",userSchema);
module.exports=User;