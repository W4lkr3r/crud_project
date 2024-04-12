
import User from '../schema/user-schema.js';

export const addUser= async(request,response )=>{
   const user=request.body;
   console.log(user);// here the body of the object is been shown
   const newUser= new User(user); //User jo jaha user schema me defiend hai vaha yaha se reuest body jaati so then we use the try catch block
   try{
      await newUser.save(); // async function banega pura schema ek baar save ho jaega
      response.status(201).json(newUser);// ye show krega update on the status
   }
   catch(error){
      response.status(409).json({message: error.message});
   }
   
 }

// express server and node server are unable to handle the post api 
// the post api cant parse in through the express and node servers