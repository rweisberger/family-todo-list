import React, {useContext }from "react";

import UserContext from "./Context";

const Home = () => {
    let ctx = useContext(UserContext);

    return (
    <div className="jumbotron bg-info">
        <h1 className="display-4 text-center">Welcome</h1>
        <p className="lead text-center">This app is supposed to help family chore tasks and get stuff done!</p>
        <p className="text-center">Login or create a new account!</p>
        <p className="lead text-center">
            <a className="btn btn-warning btn-lg px-5 mr-3" href="#/login" role="button">Login</a>
            <a className="btn btn-warning btn-lg" href="#/createAccount" role="button">Create Account</a>
        </p>
    </div>
    )
}

export default Home;