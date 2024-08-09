/* eslint-disable react/react-in-jsx-scope */
import { useState, useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  console.log("data context:", loggedInUser);
  const cartItems = useSelector((store)=> store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-8 m-8">
        <li className="px-2">Online Status { onlineStatus ? ' ✅' : ' 🔴' }
          </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 font-bold"> <Link to="/cart">🛒 ({cartItems.length}) items</Link></li>
          <button
            onClick={() =>
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }
          >
            {loginBtn}
          </button>
          <li className="px-2 font-bold">{loggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
