import React from "react";
import axios from "axios";

import {useState, useContext} from "react"; 
import { useNavigate } from "react-router-dom";

import UserContext from "./Context";

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let { setActiveUser, setAccessEmail, setLists, setDisplayedLists} = useContext(UserContext);

const findUser = () => {
    axios.post('/login', {
        email,
        password
      })
      .then(function (response) {
        console.log(response);
        const {name, email, lists} = response.data
        // console.log("name",name, "email", email, "lists", lists)
        setActiveUser(name);
        setAccessEmail(email);
        setLists(lists);
        setDisplayedLists(lists);
        if(lists.length > 0){
            navigate('/listsHome')
        } else {
            navigate('/setup')
        };
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });

      setEmail('');
      setPassword('');
}
     
    return(
        <div className="card bg-info m-5">
            <div className="card-body">
                <h5 className="card-title">Login</h5>
                <form>
                    Email address<br/> 
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/> 
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-warning" onClick={findUser}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;