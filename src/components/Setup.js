import React from "react";
import axios from "axios";

import { useState, useContext } from "react"; 

import UserContext from "./Context";
// after new list is added we need to get the info and add it to the context, that could be here of in ListsMain

const Setup = () => {
    const [newListName, setNewListName] = useState(''); 
    const [helper, setHelper] = useState([]);
    const [listId, setListId] = useState('');
    const [isActive, setIsActive] = useState(false);

    let { accessEmail } = useContext(UserContext);
    
    const createList = (e) => { 
      if(newListName.length === 0) return
        console.log(accessEmail, newListName)
        e.preventDefault();
        let email = accessEmail;
        let listName = newListName
        axios.post('/create/list/name', {
            email, listName
          })
          .then((response) => {
            console.log(response.data.docs);
            setListId(response.data.docs);
            setIsActive(true);
            // setState to deactivate input and show name
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
    }

    const addHelper = (e) => {
        e.preventDefault();
        console.log(helper, listId);   
        let email = accessEmail;
        axios.post('/create/list/addHelpers', {
            email, listId, helper
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
        setHelper('')
    }

    return(
    // <div className="container mt-5">
        <div className="card bg-info m-5">
            <div className="card-body">
                <h5 className="card-title">Setup</h5>
                    <form>
                        List Name<br/> 
                        <div className="input-group mb-3">
                          <input type="listname" className="form-control" id="listname" placeholder="list name" value={newListName} onChange={e => setNewListName(e.currentTarget.value)}/>
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-warning " onClick={createList}>Create List</button><br/>
                          </div>
                        </div>
                        {isActive ? (
                        <div className="input-group mb-3"> 
                          <input type="name" className="form-control" id="name" placeholder="Enter name" value={helper} onChange={e => setHelper(e.currentTarget.value)}/><br/>
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-warning " onClick={addHelper}>Add Helper</button>
                            </div>
                        </div>
                        ):('')}
                        
                    </form>
            </div>
        </div>
    );
}

export default Setup;