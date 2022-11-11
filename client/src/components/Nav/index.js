import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function showNavigation() {

  if (Auth.loggedIn()) {
    return (
      <ul className="flex-row">
        {Auth.ifAdmin() ?
          <li className="mx-1">
            <Link to="/admin">
              Admin
            </Link>
          </li> : ''
        }
        

        <li className="mx-1">
         
          <a href="/" onClick={() => Auth.logout()}>
            Log out
          </a>
        </li>
      </ul>
    )
  } else {
    return (
      <ul className="flex-row">
    
        <li className="mx-1 a">
          <Link to="/signup">
            Sign Up
          </Link>
        </li>
        <li className="mx-1 a">
          <Link to="/login">
            Log In
          </Link>
        </li>
        <li className="mx-1 a">
          <Link to="/">
            Home
          </Link>
        </li>
      </ul>
    );
  }
}


function Nav() {



  return (
    <header className="flex-row px-1 ">
      <h1 className="namesize a">
        <Link to="/">
          Art of Jackets
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
