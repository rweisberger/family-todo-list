import React from "react";
import {useState, useContext} from "react"; 
// import { useNavigate } from "react-router-dom";

import UserContext from "./Context";

const Setup = () => {
    const [newListName, setNewListName] = useState(''); 
    const [helper, setHelper] = useState([]);
    // const navigate = useNavigate();
    let {activeUser} = useContext(UserContext);
    
    const addHelper = (e) => {
        e.preventDefault();
        console.log(helper, newListName);        
        activeUser.listName=newListName;

        // console.log(ctx.activeUser)
        activeUser.helpers.push(helper)

        // if(ctx.activeUser.listName !== newListName){
        //     ctx.activeUser.helpers.listName = newListName;
        // }

        setHelper('')
        // console.log(ctx);
    }

    return(
    // <div className="container mt-5">
        <div className="card bg-info m-5">
            <div className="card-body">
                <h5 className="card-title">Setup</h5>
                {activeUser.helpers.length === 0? (
                    <form>
                        List Name<br/> 
                        <input type="listname" className="form-control" id="listname" placeholder="list name" value={newListName} onChange={e => setNewListName(e.currentTarget.value)}/><br/>
                        Participants<br/> 
                        <input type="name" className="form-control" id="name" placeholder="Enter name" value={helper} onChange={e => setHelper(e.currentTarget.value)}/><br/>
                        <button type="submit" className="btn btn-warning " onClick={addHelper}>Add Helper</button>
                    </form> 
                    ) : (
                    <form>
                        List Name<br/> 
                        <input type="listname" className="form-control" id="listname" placeholder="list name" value={newListName} onChange={e => setNewListName(e.currentTarget.value)}/><br/>
                        Participants<br/> 
                        <input type="name" className="form-control" id="name" placeholder="Enter name" value={helper} onChange={e => setHelper(e.currentTarget.value)}/><br/>
                        <button type="submit" className="btn btn-warning mr-3" onClick={addHelper}>Add Helper</button>
                        <a className="btn btn-warning " href="#/myList" role="button">Go to List</a>          
                    </form>
                        
                    )}
            </div>
        </div>
    // </div>
    );
}

export default Setup;