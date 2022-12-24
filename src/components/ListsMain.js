import React from "react";
import axios from "axios";

import { useContext, useEffect } from "react";
import UserContext from "./Context";
import MyList from "./MyList";


const ListsMain = () => {
let { accessEmail, lists, setLists, displayedLists, setDisplayedLists} = useContext(UserContext);

useEffect(()=>{
    axios.get(`/lists/${accessEmail}`)
      .then((response) => {
        const { data } = response
      setLists(data);
    //   setDisplayedLists(data);
      })
      .catch((error) => {
          console.log(error);
      })
      // eslint-disable-next-line
  },[])

const closeCard = (e) => {
    let newDisplay = displayedLists.filter(displayedList => displayedList.listId !== e.target.id);
    setDisplayedLists(newDisplay);
};

const openCard = (e) => {
    if(displayedLists.find(displayedList => displayedList.listId === e.target.id) !== undefined){
        console.log('list already open')
       return 
    } else {
        let found = lists.find(list => list.listId === e.target.id);
        setDisplayedLists([found,...displayedLists]);
    }
};

    return (
        <div className="container py-3">
            {/* here I am mapping through all the lists that exist in the database to make sure that they are accessible to the user */}
            {lists.map((list) => <button type="button" key={list.listId} id={list.listId} className="btn btn-outline-success" onClick={e => openCard(e)}>{list.listName}</button>
            )}
            {/* here I am mapping through all of the lists that are currently being displayed */}
            {displayedLists.map((displayedList) => (
                <div className="card my-3 " key={displayedList.listId}>
                <div className="card-header" style={{backgroundColor: "#d63384"}}>
                    {displayedList.listName}               
                     <button type="button" id={displayedList.listId} className="btn-close float-right" onClick={e => closeCard(e)} aria-label="Close"></button>
                </div>
                <div className="card-body">
                    <MyList listId={displayedList.listId}/>
                </div>
                </div>
            ))}
       </div>
    )
};

export default ListsMain;