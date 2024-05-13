import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{
      type:  String,
    },
    username: {
        type: String,
       
    },
    email:String,
    phone:String
})
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'user');

const User = mongoose.model('user',userSchema);// mongoose.model used to define new model for a specfic mongoDB collection which is table in mysql
export default User;