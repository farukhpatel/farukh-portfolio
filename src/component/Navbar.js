import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* <Router> */}
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/project"> Projects </Link>
          </li>
          <li>
            <Link to="/formik"> Formik </Link>
          </li>
        </ul>
        {/* </Router> */}
      </nav>
    </>
  );
};
export default withRouter(Navbar);
