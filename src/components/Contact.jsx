import React from "react";

const Contact=()=>{
    return(
        <div>
            <h1>Contact</h1>
            <form>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Name"></input>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Email"></input>
                <label>Message:</label>
                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit">Send</button>
                </form>
            </div>
     );
}
export default Contact;