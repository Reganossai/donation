import React, { useState } from "react";
import aeroplane from "../assets/aeroplane.jpg";
import Axios from "axios";
import {useHistory} from "react-router-dom";


const Login = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/login", {
      email: emailLogin,
      password: passwordLogin,
    }).then((response)=> {
      if(response.data.message){
        setLoginStatus(response.data.message)
      }
      else(
        history.push('/dashboard')
      )
    })
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label for="inputUsername">Username</label>
          <input
            type="text"
            name="emailLogin"
            value={emailLogin}
            onChange={(e) => {
              setEmailLogin(e.target.value);
            }}
            className="form-control"
            id="inputEmail"
            placeholder="Enter Email"
          />
          {/* {errors.email && <span>{errors.email}</span>} */}
        </div>
        <div className="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            name="passwordLogin"
            value={passwordLogin}
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
            id="inputPassword"
            placeholder="Password"
          />
          {/* {errors.password && <span>{errors.password}</span>} */}
          <small id="passwordHelp" className="form-text text-muted">
            We'll never share your password with anyone else.
          </small>
        </div>
        <button
          onClick={handleLogin}
          type="submit"
          id="sub-btn"
          className="btn btn-primary"
        >
          Login
        </button>
        <h1>{loginStatus}</h1>
      </form>

      <div className="background">
        <img src={aeroplane} alt="aeroplane" />
      </div>
    </div>
  );
};

export default Login;
