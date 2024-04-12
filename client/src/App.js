import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './component/AddUser';
import NavBar from './component/NavBar';
import Alluser from './component/AllUsers';
import Real_database from './component/Real_database';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
       <BrowserRouter>
      
          <NavBar/>
          <Routes>

           <Route path='/add' element={<AddUser/>} />
          <Route path='/' element={<Real_database/>} />
          <Route path='/all' element={<Alluser/>} />
          </Routes>
        
      </BrowserRouter>
    );
  }
}

export default App;

//   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
          