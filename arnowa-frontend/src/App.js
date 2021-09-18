import "./App.css";
import Registrationpage from "./Pages/Registrationpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { pagePaths } from "./Utils/Constant";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={pagePaths.root}>
            <Registrationpage />
          </Route>
          <Route path={pagePaths.registrationpage}>
            <Registrationpage />
          </Route>
          <Route path={pagePaths.signup}>
            <Signup />
          </Route>
          <Route path={pagePaths.login}>
            <Login />
          </Route>
          <Route path={pagePaths.home}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
