import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function BHeader() {

    

    
  return (
    <div>
      <nav  className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a  className="navbar-brand" href="#">
            Navbar
          </a>
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Swords"
                >
                 Words
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Bnumber"
                >
                  Number
              
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Yabout"
                >
                  REGISTER
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Raords"
                >
                  HELP
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Yhome"
                >
                  CONTACT
                </Link>
              </li>
              {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Raords">About</Link>
                        </li> */}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
                      }

  /* <Contact/>
    <Home/>
    <About/> */

