import React from "react";

const Home = () => {

    return (
    <div class="jumbotron">
        <h1 class="display-4">Welcome!</h1>
        <p class="lead">This app is supposed to help family chore tasks and get stuff done!</p>
        {/* <hr class="my-4"> </hr> */}
        <p>Login or create a new account!</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#/login" role="button">Login</a>
            <a class="btn btn-primary btn-lg" href="#/createAccount" role="button">Create Account</a>

        </p>
        </div>
    )
}

export default Home;