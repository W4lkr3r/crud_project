import React, { useEffect,useState } from "react";

import { getUsers } from "../service/api";
import {Table,TableHead,TableBody,TableRow,TableCell} from '@mui/material';
const Allusers=()=>{


useEffect(()=>{  // useEffect is used when we refresh the component page and the things are visible   we use component didmount but we are using the function based component and it gets the updated component or the rendered component
    getAllUsers();
},[]);

const getAllUsers=async()=>{
   let response= await getUsers();
   console.log(response.data);
}
    return(
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell>USERNAME</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell>PHONE</TableCell>
            </TableRow>
            
        </TableHead>
    </Table>
    )
}
export default Allusers; // for the thing where we want to showcase the whole database wjhere the add users could be showns owe use the use effect function from the react

//where useEffect takes the two input