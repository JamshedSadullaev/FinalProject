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
          <Link to="/orderHistory">
            Order History
          </Link>
        </li>

        <li className="mx-1">
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
      </ul>
    )
  } else {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/">
            <div className="dropdown">
              <span>Jackets</span>
              <div className="dropdown-content">
                <ul className="ulmove">
                <li className="linone">
                <Link to="/">
                  Originals
                </Link>
                </li>
                <li className="linone">
                <Link to="/">
                  Giclee Canvases
                </Link>
                </li>
                <li className="linone">
                <Link to="/">
                  Prints
                </Link>
                </li>
                </ul>
              </div>
            </div>
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/signup">
            SIGNUP
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/login">
            LOGIN
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/">
            HOME
          </Link>
        </li>
      </ul>
    );
  }
}


function Nav() {



  return (
    <header className="flex-row px-1">
      <h1 className="namesize">
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
