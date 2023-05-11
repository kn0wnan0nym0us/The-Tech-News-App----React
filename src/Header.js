import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {props.loggedIn ? (
            <li><Link to="/">Logout</Link></li>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
