import React, { useEffect,useState } from "react";

import { getUsers } from "../service/api";
import {Table,TableHead,TableBody,TableRow,TableCell,styled,Button} from '@mui/material';
import {Link} from 'react-router-dom';
const StyledTable=styled(Table)`
width:90%;
margin: 50px auto 0 auto;
`

const THead=styled(TableRow)`
background: #000000;
& >th{
    color: #fff;
    font-size:20px;
}
`;

const TBody=styled(TableRow)`
& > td{
    font-size:20px;
}`;

const Allusers=()=>{


    const[users,setUsers]=useState([]);


useEffect(()=>{  // useEffect is used when we refresh the component page and the things are visible   we use component didmount but we are using the function based component and it gets the updated component or the rendered component
    getAllUsers();
},[]);

const getAllUsers=async()=>{
   let response= await getUsers();
   setUsers(response.data);
}
    return(
    <StyledTable>
        <TableHead>
            <THead>
                <TableCell>NAME</TableCell>
                <TableCell>USERNAME</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell>PHONE</TableCell>
                <TableCell></TableCell>
            </THead>
            
        </TableHead>
        <TableBody>
            {
            users.map(user => (
            <TBody>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                    <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user.username}`}>Edit</Button>
                    <Button variant="outlined">Delete</Button>
                </TableCell>
            </TBody>
            ))
        }
        </TableBody>
    </StyledTable>
    )
}
export default Allusers; // for the thing where we want to showcase the whole database wjhere the add users could be showns owe use the use effect function from the react

//where useEffect takes the two input