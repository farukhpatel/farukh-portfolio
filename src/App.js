import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import {
  Switch,
  Route,
  HashRouter,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import API from "./utility/ApiConstant";
import axios from "axios";
import instance from "./utility/AxiosConstant";
import Project from "./component/Project";
import { createContext, useEffect, useState } from "react";
import myContext, {
  initialState,
  Provider,
  reducer,
} from "./component/myContext";
import FormikC from "./component/Formik";
const App = () => {
  const [notes] = useState([
    {
      title: "First note",
      description: "This is my first note",
      done: false,
    },
  ]);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Provider initialState={initialState} reducer={reducer}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/formik" component={FormikC} />
          </Provider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
