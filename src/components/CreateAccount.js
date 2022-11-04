import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./Context";

const CreateAccount = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const ctx = useContext(UserContext);


const handleCreate = () => {

    console.log(name, email, password);
    if(!name) return;
    if(!email) return;
    if(!password) return;
    ctx.users.push({name, email, password,});
    alert('Successfully created account!');
    console.log(ctx.users);
    navigate('/login')

}

    return(
        <div className="card bg-warning m-5">
            <div className="card-body">
                <h5 className="card-title">Create Account</h5>
                <form>
                    Name<br/> 
                    <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
                    Email address<br/> 
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/> 
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-primary" onClick={handleCreate}>Login</button>
                </form>
            </div>
        </div>
    )
}
export default CreateAccount;