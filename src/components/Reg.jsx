import React from "react";

const Registration=()=>{
    return (
        <div className="container">
        <h1>Registration</h1>
        <form className="form">
            <label>First Name</label>
            <input type="text" name="first_name" placeholder="First Name"></input>
            <label>Last Name</label>
            <input type="text" name="last_name" placeholder="Last Name"></input>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email"></input>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password"></input>
            <button type="submit">Register</button>
            </form>


        </div>

    )
}

export default Registration;