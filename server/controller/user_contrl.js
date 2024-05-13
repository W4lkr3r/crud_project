
import { request, response } from 'express';

import User from '../schema/user-schema.js';

export const addUser = async (request, response) => {
   const user = request.body;
   if (!user || Object.keys(user).length === 0) { // Check if user is empty or not
      return response.status(400).json({ message: "User data is required" }); // Return a 400 Bad Request status
   }
   console.log(user.length); // Here the body of the object is being shown
   const newUser = new User(user); // User defined in the user schema will receive the request body here
   try {
      await newUser.save(); // Save the user data
      response.status(201).json(newUser); // Show the updated status
   } catch (error) {
      response.status(409).json({ message: error.message }); // Show error message
   }
}


 
// express server and node server are unable to handle the post api 
// the post api cant parse in through the express and node servers

export const getUsers=async (request,response)=>{
   try {
   const users=await User.find({});
   response.status(200).json(users);
   }
   catch(error){
     response.status(404).json({message:error.message});
   }
};

export const getUser =async (request,response)=>{
 
   try {
   const user=await User.find({username:request.params.username});
   response.status(200).json(user);
   }
   catch(error){
     response.status(404).json({message:error.message});
   }
};


export const editUser=async(request,response)=>{
   let user =request.body;
   const editUser=new User(user);
   try {
     await User.updateOne({username:request.params.username},editUser);
     response.status(201).json(editUser);
   }
   catch(error){
       response.status(409).json({message:error.message});
   }
};