import React from "react";
import axios from "axios";

import { useContext } from "react";

import UserContext from "../context/Context";

const DeleteList = (props) => {

    const { accessEmail: email, setLists, displayedLists, setDisplayedLists } = useContext(UserContext);
    const { listId } = props

    const deleteRecord = (e) =>{
        e.preventDefault();
        axios.delete(`/delete/list/${email}/${listId}`)
        .then((response) => {
            setLists(response.data.docs[0].lists);
            setDisplayedLists(displayedLists.filter(displayedList => displayedList.listId !== listId));
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return  <button type="submit" className="btn btn-outline-danger mr-3" onClick={e => deleteRecord(e)}>Delete List</button>
    
}

export default DeleteList