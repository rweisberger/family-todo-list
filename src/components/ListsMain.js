import React from "react";

import { useContext } from "react";
import UserContext from "./Context";
import MyList from "./MyList";


const ListsMain = () => {
let { lists } = useContext(UserContext);
console.log(lists);

    return (
        <div className="container">
            {lists.map((list,i) => (
<           div class="card my-5">
                <div class="card-header">
                    {list.listName}
                </div>
                <div class="card-body">
                    <MyList/>
                </div>
                </div>
            ))}
       </div>
       
    )
}
export default ListsMain;