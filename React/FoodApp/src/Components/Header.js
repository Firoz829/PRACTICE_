import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
