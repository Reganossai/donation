import React, { useState } from "react";
import aeroplane from "../assets/aeroplane.jpg";
import Axios from "axios";

const Register = ({ handleSubmit }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleRegister = () => {
    Axios.post("http://localhost:8080/register", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      address: address,
      city: city,
      state: state,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form >
        <div class="form-group">
          <label for="inputFirstname">First name</label>
          <input
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            class="form-control"
            placeholder="First name"
            name="firstname"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputLastname">Lastname</label>
          <input
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            class="form-control"
            placeholder="Last name"
            name="lastname"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            class="form-control"
            id="inputAddress"
            placeholder="Enter home address"
            name="address"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              class="form-control"
              id="inputCity"
              name="city"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              id="inputState"
              class="form-control"
              name="state"
            />
          </div>
        </div>
        <button
          onClick={handleRegister}
          type="submit"
          id="sub-btn"
          class="btn btn-primary"
        >
          Register
        </button>
      </form>
      <div className="background">
        <img src={aeroplane} alt="aeroplane" />
      </div>
    </div>
  );
};
export default Register;
