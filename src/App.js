import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "../src/views/home";
import Rocket from "../src/views/rockets";
import Dragons from "../src/views/dragons";
import Ships from "../src/views/ships";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/rocket">
            <Rocket />
          </Route>
          <Route path="/dragons">
            <Dragons />
          </Route>
          <Route path="/ships">
            <Ships />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
