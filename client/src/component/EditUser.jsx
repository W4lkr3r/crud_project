import React from "react";
import { FormGroup,FormControl,InputLabel,Input,Typography,styled, Button } from '@mui/material';
import{editUser,getUser} from '../service/api';
import {useState, useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
const Container =styled(FormGroup)`
width: 50%;
margin:5% auto 0 auto;
    & > div{
        margin-top:20px
    }                             

`
//for handling the css of the parent child we use the & >

const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
}
//this function used for gettering the user wht it typed whch is stored in the target section of the which is inside the value in the developer section
const EditUser = ()=>{
    const [user,setUser]=useState(defaultValue);// the whole default value is inside the user variable now here e.target.name we can fill the accordingly
   
    const navigate=useNavigate();
    const {username}= useParams();

    useEffect(()=>{
     loadUserDetails();
    },[]);

    const loadUserDetails=async()=>{
        const response=await getUser(username);
         // here when the api call is initiated it doesnt know what username is therefore we use a hook of react
         setUser(response.data);
    }

    const editUserDetails= async ()=>{
        const response= await editUser(username,user);
         navigate('/all');
      }
const onValueChange =(e)=>{
    console.log(e.target.name,e.target.value); //now here we have the name element in the e parameter of the onchange value so we will use the e.name.target.value
    setUser({...user,[e.target.name]: e.target.value}); // here problem was when the key and the value both comes to a variable then we have to set the key to a square bracket
   console.log(user);
}

    return (
        <Container>
            <Typography variant="h4">Edit  User</Typography>
            <FormControl>
                 <InputLabel> Name</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name="name" /> 

                 </FormControl>
                
                 <FormControl>
                 <InputLabel> UserName</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name="username" />
                 </FormControl>
                 <FormControl>
                 <InputLabel> Email</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name="email"/>
                 </FormControl>
                 <FormControl>
                 <InputLabel> Phone</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name="phone"/>
                 </FormControl>

                 <FormControl>
                    <Button variant="outlined" onClick={() => editUserDetails()}>Edit USER</Button>
                 </FormControl>
                 
            
        </Container>
    )

}
export default EditUser;

// // Formgroup se ek form create hota h jisse ek input value ko prsent lr sakte h
// uske adar ek child class, hogi parent form control hogi uske andar ek input label use hoga jisme aap daal sakte kya inpout lena aur vo close ek input self closing tag se hoga
// for the heading in the form apn use krenge typography matrial ui se use krenege
// ab backend ka aaega thoda ki maine form me kuch dala toh fir ek function triggger hoga jisse hum ye dekh sakte ki kya likh use utha ke db me daal denge we will use on chnage function
// now we will make a object using the four data we will get which will be passed to the backend and when the add user will be touched the object will be send to the backend
//  line 35 /*here the question is that  hopw would we know that the trigger value is the name email or phn number and thing now for that we use the name element inthe input section*/
// we use ...user because because the new value will overide the old information which was set into the object deafult