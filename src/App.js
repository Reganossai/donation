import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sponsor from "./pages/Sponsor";
import Preapp from "./pages/Preapp";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Five from "./pages/Five";
import God from "./pages/God";
import Debunked from "./pages/Debunked";
import Ten from "./pages/Ten";
import Myths from "./pages/Myths";


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
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/sponsor">
            <Sponsor/>
          </Route>
          <Route path="/preapp">
            <Preapp/>
          </Route>
          <Route path="/donate">
            <Donate/>
          </Route>
          <Route path="/five">
            <Five/>
          </Route>
          <Route path="/god-provides">
            <God/>
          </Route>
          <Route path="/debunked">
            <Debunked/>
          </Route>
          <Route path="/ten">
            <Ten/>
          </Route>
          <Route path="/myths">
            <Myths/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
