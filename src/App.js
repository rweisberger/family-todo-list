import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import UserContext from "./components/Context";
import Protected from './components/Protected';
import Navbar from './components/navbar';
import MyList from './components/MyList';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Setup from './components/Setup';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    // let [activeUser, setActiveUser] = useState(null);
    // let [accessEmail, setAccessEmail] = useState(null);
    let context = {users:[{name:'Rachel', email:'rachel@gmail.com', password:'secret', listName:'', todos:[], helpers:[]}]};


return (
<HashRouter>
    <UserContext.Provider value={context}> 
        <Navbar />
        <Routes>
            <Route path="/" exact element={< Home/>} />
            <Route path="/createAccount" element={<CreateAccount />}/>
            <Route path="/login" element={<Login />}/>
            <Route path='/' element={<Home />} />
            <Route path='/myList'element={
                <Protected>
                    < MyList/>
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
