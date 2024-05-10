// there are 3 ways of the api caliing that were request fetch but we will be usuing the axios library

import axios from 'axios';

const URL='http://localhost:8000';
export const addUser=async(data)=>{
    try {

 return await  axios.post(`${URL}/add`,data)
    } 
    catch(error){
      console.log("Error is been generated")
    }
}

//api calls are asyncronous request hoti hai to apn ko await laga ke handle krna padhta hai4

// // // async function getData(cityname){
// //     const promise=await fetch(`url`);
// //     return await promise.json
// // }

// this is api calling

export const getUsers =async()=>{
  try {
   return  await  axios.get(`${URL}/all`);
  }
  catch(error){
    console.log('Error while calling getUser API',error);
  }

}