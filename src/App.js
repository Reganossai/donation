import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sponsor from "./pages/Sponsor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile/:childId" >
          <Profile/>
          </Route>
          <Route path="/sponsor">
            <Sponsor/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
