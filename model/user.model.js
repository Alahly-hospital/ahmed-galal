const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const bcrybt = require("bcryptjs")

const userSchema = new Schema({
    firstName: {
      type:String,
      required:true,
      trim:true
    },
    lastName:{
       type : String ,
        required : true ,
        trim:true
      },
    age :{
      type:Number,
      required:true
    },
    address:{
      type:String,
      required:true,
      trim:true
    },
    position:{
      type:String,
      trim:true
    },
    phone :{
      type:Number,
      required:true
    },
    email :{
      type:String,
      required:true,
      unique:true
    },
    gender :{
      type:String,
      // required:true,
      enum:["male","female"]
    },
    isAdmin:{
      type:Boolean,
      default:false
    },
    password:{
      type:String,
      required:true,
      trim:true
    },
    tokens:[
      {type:String,trim:true,expires:"2d"}
    ],
    image:{
      type:String,
      trim:true
    },
    date:{
      type:String,
      trim:true,
    }
})

userSchema.pre("save", async function (next) {
    try {
      if (!this.isModified("password")) {
        return next();
      }
      this.password = await bcrybt.hash(this.password, 8);
      next();
    } catch (error) {
      return next(error);
    }
  });

userSchema.methods.toJSON = function () {
    const user = this.toObject(); 
    
    delete user.tokens;
    delete user.password;

    return user; 
  };
const User=mongoose.model("user",userSchema)
module.exports=User;