import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  useEffect(() => {
    // console.log("useEffects");
  }, [btnName]);

  const onlinestatus = useOnlineStatus();

  const { isLoggedUser } = useContext(UserContext);
  // console.log(isLoggedUser);

  // subscribing to the store using a selecter
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  // console.log(cartItems);
  return (
    <div className="header flex items-center justify-between border-2 border-black rounded-xl bg-white shadow-[0px_0px_5px_5px_#6e6a6a70]">
      <div className="logo-container">
        <Link to="/">
          <img className="logo w-[100px] ml-[50px]" alt="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items text-[17px]">
        <ul className="flex items-center pr-[100px]">
          <li className="list-none mx-2.5 cursor-pointer text-[#2e2a2a] hover:underline hover:text-black">
            Online status{onlinestatus ? "✅" : "🔴"}
          </li>
          <li className="list-none mx-2.5 cursor-pointer text-[#2e2a2a] hover:underline hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="list-none mx-2.5 cursor-pointer text-[#2e2a2a] hover:underline hover:text-black">
            <a href="/about">About Us</a>
          </li>
          <li className="list-none mx-2.5 cursor-pointer text-[#2e2a2a] hover:underline hover:text-black">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="list-none mx-2.5 cursor-pointer text-[#2e2a2a] hover:underline hover:text-black">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="list-none mx-2.5 cursor-pointer text-[#2e2a2a] hover:underline hover:text-black ">
            <Link to="/cart">Cart - {cartItems?.length || 0}</Link>
          </li>
          <li className="list-none mx-2.5 cursor-pointer text-[#2e2a2a] hover:underline hover:text-black">
            <button
              className="btn bg-green-600 text-white px-2.5 py-3.5 text-[0.95rem] text font-semibold rounded-xl border-0 cursor-pointer"
              onClick={() => {
                btnName === "login"
                  ? setBtnName(isLoggedUser)
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
