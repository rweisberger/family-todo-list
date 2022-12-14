import React,{ useContext } from "react";

import UserContext from "./Context";
 
 function Navbar(){
    let {activeUser, setActiveUser} = useContext(UserContext);

    const logout = () => {
        setActiveUser(null);
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <a className="navbar-brand px-3" href="#/">Family ToDo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {activeUser ? (            
                <div className="navbar-nav ml-auto">  
                <a className="nav-item nav-link px-3" href="#/listsHome">My Lists</a>
                <a className="nav-item nav-link px-3" href="#/setup">Setup</a>
                {/* <a className="nav-item nav-link px-3" href="#/myList">My List</a>   */}
                <button type="button" className="btn btn-outline-light" onClick={logout}>Logout</button>          
                </div>
                ) : (
                <div className="navbar-nav ml-auto">  
                <a className="nav-item nav-link px-3" href="#/createAccount">Create Account</a>
                <a className="nav-item nav-link px-3" href="#/login">Login</a>
                </div>
                )} 
                
            </div>
        </nav>
    )
}
export default Navbar;