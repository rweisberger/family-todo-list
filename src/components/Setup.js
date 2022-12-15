import React from "react";
import axios from "axios";

import {useState, useContext} from "react"; 
// import { useNavigate } from "react-router-dom";

import UserContext from "./Context";

const Setup = () => {
    const [newListName, setNewListName] = useState(''); 
    const [helper, setHelper] = useState([]);
    const [listId, setListId] = useState('');

    let { accessEmail } = useContext(UserContext);
    
    const createList = (e) => { 
        console.log(accessEmail, newListName)
        e.preventDefault();
        let email = accessEmail;
        let listName = newListName
        axios.post('/create/list/name', {
            email, listName
          })
          .then(function (response) {
            console.log(response.data.docs);
            setListId(response.data.docs);
            // setState to deactivate input and show name
          })
          .catch(function (error) {
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
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
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
                        <input type="listname" className="form-control" id="listname" placeholder="list name" value={newListName} onChange={e => setNewListName(e.currentTarget.value)}/><br/>
                        <button type="submit" className="btn btn-warning " onClick={createList}>Create List</button><br/>
                        Participants<br/> 
                        <input type="name" className="form-control" id="name" placeholder="Enter name" value={helper} onChange={e => setHelper(e.currentTarget.value)}/><br/>
                        <button type="submit" className="btn btn-warning " onClick={addHelper}>Add Helper</button>
                    </form>
                    
            </div>
        </div>
    );
}

export default Setup;