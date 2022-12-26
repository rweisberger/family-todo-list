import React, {useContext }from "react";

import UserContext from "../context/Context";

const Home = () => {
    let {activeUser} = useContext(UserContext);

    if (!activeUser) {
        return (
            <div className="jumbotron bg-info">
                <h1 className="display-4 text-center">Welcome</h1>
                <p className="lead text-center">This app is supposed to help families share tasks and get stuff done!</p>
                <p className="text-center">Login or create a new account!</p>
                <p className="lead text-center">
                    <a className="btn btn-warning btn-lg px-5 mr-3" href="#/login" role="button">Login</a>            
                    <a className="btn btn-warning btn-lg" href="#/createAccount" role="button">Create Account</a>
                </p>
            </div>)
    } else {
        return (
            <div className="jumbotron bg-info">
                <h1 className="display-4 text-center">{`Welcome ${activeUser.name}!`}</h1>
                <p className="lead text-center">Let's get organized, delegate tasks, and get stuff done!</p>
                <p className="text-center">Setup a list or go to your list!</p>
                <p className="lead text-center">
                    <a className="btn btn-warning btn-lg px-5 mr-3" href="#/setup" role="button">Setup</a>            
                    <a className="btn btn-warning btn-lg" href="#/listsHome" role="button">My List</a>          
                </p>
            </div>
        )
    }    
}
   

export default Home;