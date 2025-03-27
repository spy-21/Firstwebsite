import React from "react";

const Login=()=>{
    return (
        <div className="container">
        <h1>Login</h1>
        <form className="form">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email"></input>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password"></input>
            <button type="submit">Login</button>
            </form>
            </div>
            );
}
export default Login;