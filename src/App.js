import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import UserContext from "./components/Context";
import Navbar from './components/navbar';
import MyList from './components/MyList';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Home from './components/Home';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    // let [activeUser, setActiveUser] = useState(null);
    // let [accessEmail, setAccessEmail] = useState(null);
    let context = {users:[{name:'Rachel', email:'rachel@gmail.com', password:'secret'}], todos:[]};


return (
<HashRouter>
    <UserContext.Provider value={context}> 
        <Navbar />
        <Routes>
            <Route path="/" exact element={< Home/>} />
            <Route path="/createAccount" element={<CreateAccount />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/myList" element={<MyList />}/>
        </Routes>
    </UserContext.Provider>
</HashRouter>
);
}

export default App;
