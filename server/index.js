import express from 'express'; // until  the jjson file is been informed for been the type as module until then the import line will be of  no use
import dotenv from 'dotenv';
import Connection from './databse/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import Routes from './routes/route.js';
const app=express();
dotenv.config();
app.use(bodyParser.json({extended:true}));// read the user_control file ye vahi se aaya hai
app.use(bodyParser.urlencoded({extended:true}));//this is done to decode
app.use(cors());

app.use('/',Routes); // this is used for  calling the routes

const port=8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);

app.listen(port,()=>{ console.log(`Server is running at ${port}`)});

// app.listen does the starting of the server s

// we use the .env file 

// // since the backend runs at the 8000 port and front end at 3000 the api will give error
// therefore we use a a package called cors


//now the steps in this action of printing hello word
/* first we the adduser api is been called then it goes to backend code it went 
to the routes then it goes to the route.js after that it trigger the route and gives a callback */ 