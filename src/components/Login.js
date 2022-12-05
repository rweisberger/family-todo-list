import React from "react";
import axios from "axios";

import {useState, useContext} from "react"; 
import { useNavigate } from "react-router-dom";

import UserContext from "./Context";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState(''); 
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();
    let ctx = useContext(UserContext);

const findUser = () => {
    console.log(loginEmail, loginPassword)
    // let data = ctx.users;
    //        data.forEach(user => {
    //             if(loginEmail === user.email && loginPassword === user.password) {
    //                     console.log('user match');
    //                     ctx.setActiveUser(user);
    //                     navigate('/setup');
    //                     console.log(ctx)
    //             }
    //         })
    axios.post('/login', {
        loginEmail,
        loginPassword
      })
      .then(function (response) {
        console.log(response);
        alert('Successfully created account!');
        navigate('/login')
      })
      .catch(function (error) {
        console.log(error.response.data);
        alert(error.response.data);

      });
}

    return(
    // <div className="container mt-5">
        <div className="card bg-info m-5">
            <div className="card-body">
                <h5 className="card-title">Login</h5>
                <form>
                    Email address<br/> 
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)}/><br/>
                    Password<br/> 
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-warning" onClick={findUser}>Login</button>
                </form>
            </div>
        </div>
    // </div>
    );
}

export default Login;