// backend routeing

import express from 'express';

import { addUser ,getUsers} from '../controller/user_contrl.js';

const router= express.Router(); // 

router.post('/add',addUser);
router.get('/all',getUsers);
export default router;// router uses the function if the express which takes the function which was already in the api call which was post 
//we use the router.post with different routes that is add delete edit here we used the add for the first doing

// also the api calling will give an error cors named go to backend
