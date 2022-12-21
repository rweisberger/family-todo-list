import React from "react";
import axios from "axios";

import { useContext } from "react";

import UserContext from "./Context";

// current status: list is deleted in MongoDB, list and button are still visible. 

const DeleteList = (props) => {

    const { accessEmail: email } = useContext(UserContext);
    const { listId } = props

    const deleteRecord = (e) =>{
        e.preventDefault();
        axios.delete(`/delete/list/${email}/${listId}`)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    return  <button type="submit" className="btn btn-outline-danger mr-3" onClick={e => deleteRecord(e)}>Delete List</button>
    
}

export default DeleteList