 import React from "react";
 
 function Navbar(){

    return(
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a className="navbar-brand px-3" href="#">Family ToDo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
            {/* <a className="nav-item nav-link px-3" href="#/">Home </a> */}
            <a className="nav-item nav-link px-3" href="#/createAccount">Create Account</a>
            <a className="nav-item nav-link px-3" href="#/login">Login</a>
            <a className="nav-item nav-link px-3" href="#/setup">Setup</a>
            <a className="nav-item nav-link px-3" href="#/myList">My List</a>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;