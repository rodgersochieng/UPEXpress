import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <di className="navbar">
        <div className="logo">
          <p>
            <span>UPE</span>Xpress
          </p>
        </div>
        <div className="navs">
          <ul className="components">
            <li>
              <Link className="home" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="booking" to="/booking">
                Bookings
              </Link>
            </li>
            <li>
              <Link className="services" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="about" to="/aboutus">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </di>
    </>
  );
}
