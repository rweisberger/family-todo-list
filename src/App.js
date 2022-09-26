import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import MyList from './components/MyList';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Home from './components/Home';
// import Todo from './components/todo';
// import Login from './components/login';
import Navbar from './components/navbar';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

return (
<HashRouter>
    <Navbar />
    <Routes>
        <Route path="/" exact element={< Home/>} />
        <Route path="/createAccount/" element={<CreateAccount />}/>
        <Route path="/login/" element={<Login />}/>
        <Route path="/myList/" element={<MyList />}/>
    </Routes>
</HashRouter>
);
}

export default App;
