import mongoose from 'mongoose';
const Connection=async(username,password)=>{
    const URL=`mongodb://localhost:27017`;
    try {
   await mongoose.connect(URL,);
   console.log('Database connected Successfully');
    }
    catch(error){
      console.log('Error while connecting with the database',error)
    }
}

export default Connection;
// here the problem is we dont write our credentials at the url kabhi bhi nhi thats y we use dotenv