import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:String,
    username: {
        type: String,
        unique: true
    },
    email:String,
    phone:String
})
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'user');

const user = mongoose.model('user',userSchema);// mongoose.model used to define new model for a specfic mongoDB collection which is table in mysql
export default user;