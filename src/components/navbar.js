 import React from "react";
 
 function Navbar(){

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ToDo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#/">Home </a>
            <a className="nav-item nav-link" href="#/createAccount">Create Account</a>
            <a className="nav-item nav-link" href="#/login">Login</a>
            <a className="nav-item nav-link" href="#/myList">My List</a>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;