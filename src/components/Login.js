import React from "react";
import {useState} from "react"; 

function Login(){
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    console.log(email, password)

    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <form>
                    Email address<br/> 
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/> 
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;