import { useNavigate } from "react-router-dom";
import React from "react";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form from refreshing the page
    navigate("/main");
  };

  return (
    <div className="bg-red-600">
      <h1>Register</h1>
      <form className="text-left">
        <div className="flex flex-row gap-2">
          <label>Username:</label>
          <input type="text" name="username" placeholder="Username"></input>
        </div>
        <div className="flex flex-row justify-between gap-6">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-slate-100 border-2 border-slate-500 p-2"
          ></input>
        </div>

        <div className="flex flex-row gap-2">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="text-red-900"
          ></input>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
