import React from "react";
import WeatherApp from "./components/Pages/Weather";
import Home from "./components/Pages/HomePage/Home";
import NavBar from './components/NavBar/NavBar'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useParams
} from "react-router-dom";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <TransitionGroup>
          <CSSTransition  classNames="fade" timeout={300}>
            <Switch>
              <Route exact path="/">
                <Home exact />
              </Route>
              <Route path="/weather">
                <WeatherApp />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Router>
  );
}

export default App;
