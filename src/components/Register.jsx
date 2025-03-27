import React from "react";

const Register=()=>{
    return(
        <div>
            <h1>Register</h1>
            <form>
                <label>Username:</label>
                <input type="text" name="username" placeholder="Username"></input>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Email"></input>
                <label>Password:</label>
                <input type="password" name="password" placeholder="Password"></input>
                <button type="submit">Register</button>
                </form>
                </div>
                );
}
export default Register;
       