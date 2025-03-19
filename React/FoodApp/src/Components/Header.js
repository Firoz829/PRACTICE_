import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  useEffect(() => {
    console.log("useEffects");
  }, [btnName]);

  const onlinestatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" alt="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status{onlinestatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery </Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="btn"
              onClick={() => {
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
