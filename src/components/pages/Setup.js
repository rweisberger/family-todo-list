import React from "react";
import axios from "axios";

import { useState, useContext } from "react"; 
import { useNavigate } from "react-router-dom";

import UserContext from "../context/Context";
// after new list is added we need to get the info and add it to the context, that could be here of in ListsMain

const Setup = () => {
    const navigate = useNavigate();
    const [newListName, setNewListName] = useState(''); 
    const [helper, setHelper] = useState([]);
    const [listId, setListId] = useState('');
    const [listNameCreated, setListNameCreated] = useState(false);
    const [displayLink, setDisplayLink] = useState(false);
    let { accessEmail } = useContext(UserContext);

    const goToLists = () => {
      navigate('/listsHome')
    }
    
    const createList = (e) => { 
      if(newListName.length === 0) return
        // console.log(accessEmail, newListName)
        e.preventDefault();
        let email = accessEmail;
        let listName = newListName
        axios.post('/create/list/name', {
            email, listName
          })
          .then((response) => {
            // console.log(response.data.docs);
            setListId(response.data.docs);
            setListNameCreated(true);
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
            alert(`${helper} was added!`);
            setDisplayLink(true);
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
        setHelper('')
    }

    return(
        <>
          <div className="card bg-info mr-5 ml-5 mt-5">
            <div className="card-body">
                <h5 className="card-title">Setup</h5>
                  {listNameCreated ? (
                    <form>
                      List Name<br/> 
                      <div className="input-group mb-3">
                        <input type="listname" className="form-control" id="listname" placeholder={newListName} value={newListName} onChange={e => setNewListName(e.currentTarget.value)} />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-warning"  onClick={createList} disabled>Create List</button>
                        </div>
                      </div>
                      <div className="input-group mb-3"> 
                        <input type="name" className="form-control" id="name" placeholder="Enter name" value={helper} onChange={e => setHelper(e.currentTarget.value)}/><br/>
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-warning " onClick={addHelper}>Add Helper</button>
                          </div>
                      </div>
                    </form>
                    
                  ):(
                    <form>
                      List Name<br/> 
                        <div className="input-group mb-3">
                        <input type="listname" className="form-control" id="listname" placeholder="Name your list" value={newListName} onChange={e => setNewListName(e.currentTarget.value)}/>
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-warning" onClick={createList}>Create List</button>
                        </div>
                      </div>
                    </form>
                  )}  
            </div>        

        </div>      
        {displayLink ? (
          <div className="text-center">
            <button type="button" className="btn btn-link" onClick ={goToLists}>Setup completed! Let's add some tasks!</button>
          </div> 
          ) : (
            ''
          )
        }
            
      </>
    );
}

export default Setup;