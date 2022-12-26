import React, { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import './App.css';
import UserContext from "./components/context/Context";
import Protected from './components/navigation/Protected';
import Navbar from './components/navigation/Navbar';
import CreateAccount from './components/pages/CreateAccount';
import Login from './components//pages/Login';
import ListsMain from './components//pages/ListsMain';
import Setup from './components//pages/Setup';
import Home from './components//pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    let [activeUser, setActiveUser] = useState(null);
    let [accessEmail, setAccessEmail] = useState(null);
    let [lists, setLists] = useState(null);
    let [displayedLists, setDisplayedLists] = useState(null);
    
    let context = {activeUser, setActiveUser, accessEmail, setAccessEmail, lists, setLists, displayedLists, setDisplayedLists};


return (
<HashRouter>
    <UserContext.Provider value={context}> 
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/createAccount" element={<CreateAccount />}/>
            <Route path="/login" element={<Login />}/>
            {/* <Route path='/myList'element={
                <Protected>
                    < MyList/>
                </Protected>
                }
            /> */}
            <Route path='/listsHome'element={
                <Protected>
                    < ListsMain/>
                </Protected>
                }
            />
             <Route path='/setup'element={
                <Protected>
                    < Setup/>
                </Protected>
                }
            />
            {/* <Route path="/setup" element={<Setup />}/>
            <Route path="/myList" element={<MyList />}/> */}
        </Routes>
    </UserContext.Provider>
</HashRouter>
);
}

export default App;
