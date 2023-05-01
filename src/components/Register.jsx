import React,{ useState }  from "react";
import aeroplane from "../assets/aeroplane.jpg";

const Register = ({ handleSubmit }) => {
  
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label for="inputFirstname">First name</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputLastname">Lastname</label>
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              class="form-control"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
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
            class="form-control"
            id="inputAddress"
            placeholder="Enter home address"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <input type="text" id="inputState" class="form-control" />
          </div>
        </div>
        <button type="submit" id="sub-btn" class="btn btn-primary">
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
