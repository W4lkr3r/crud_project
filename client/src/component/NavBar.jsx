import React from "react";
import {AppBar,Toolbar,styled} from '@mui/material/';

import { NavLink } from "react-router-dom";
const Header=styled(AppBar)`
background:#111111;
font-style: Garamond
`


const Tabs=styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color:inherit;
text-decoration:none
`
const NavBar= ()=>{
    return(
    <Header position="static">
        <Toolbar>
         <Tabs to ='/'>REAL DATABASE</Tabs>
         <Tabs to ='/add'>ADD USER</Tabs>
         <Tabs to ='/all'> ALL USER</Tabs>
        </Toolbar>
    </Header>
    )
}
export  default NavBar;

// NavLink react se aaya usme kya hota ki jo ye words hai vo linksjaise click hone lag jaate
// ab ye navigating wali cheez ho gyi toh ab apn ko ek form banan padega jaha user input daal sake toh apn vo cheez vo matrial ui se form lenege 