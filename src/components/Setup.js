import React from "react";
import {useState, useContext} from "react"; 
// import { useNavigate } from "react-router-dom";

import UserContext from "./Context";

const Setup = () => {
    const [newListName, setNewListName] = useState(''); 
    const [helper, setHelper] = useState([]);
    // const navigate = useNavigate();
    let ctx = useContext(UserContext);
    
    const addHelper = (e) => {
        e.preventDefault();
        // setNewListName(newListName);
        setHelper(helper);
        ctx.activeUser.helpers.push(helper);
        // if(ctx.activeUser.listName !== newListName){
        //     ctx.activeUser.helpers.listName = newListName;
        // }
        setHelper('')
        console.log(ctx);
    }

    return(
    // <div className="container mt-5">
        <div className="card bg-info m-5">
            <div className="card-body">
                <h5 className="card-title">Setup</h5>
                <form>
                    List Name<br/> 
                    <input type="listname" className="form-control" id="listname" placeholder="list name" value={newListName} onChange={e => setNewListName(e.currentTarget.value)}/><br/>
                    Participants<br/> 
                    <input type="name" className="form-control" id="name" placeholder="Enter name" value={helper} onChange={e => setHelper(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-warning" onClick={addHelper}>Add Helper</button>
                </form>
            </div>
        </div>
    // </div>
    );
}

export default Setup;