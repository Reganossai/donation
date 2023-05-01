import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Arrivals from "./components/Arrivals";
import Departures from "./components/Departures";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landingpage/>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/arrivals">
            <Arrivals />
          </Route>
          <Route path="/departures">
            <Departures />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
