import React, { useState } from "react";
import aeroplane from "../assets/aeroplane.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email); 

  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="inputUsername">Username</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="inputEmail"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            id="inputPassword"
            placeholder="Password"
          />
          <small id="passwordHelp" className="form-text text-muted">
            We'll never share your password with anyone else.
          </small>
        </div>
        <button type="submit" id="sub-btn" className="btn btn-primary">
          Login
        </button>
      </form>

      <div className="background">
        <img src={aeroplane} alt="aeroplane" />
      </div>
    </div>
  );
}

export default Login;
