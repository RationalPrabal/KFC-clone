import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
export default function Hamburger({ changeShow }) {
  return (
    <div className="bg-white shadow-lg p-4 w-[70%] gap-3 flex justify-between font-nunito font-semibold">
      <div>
        <Link to="/">
          {" "}
          <p>Home</p>
        </Link>
        <Link to="/menu">
          {" "}
          <p>Menu</p>
        </Link>
        <Link to={"/deals"}>
          <p>Deals</p>
        </Link>
        <Link to={"/account"}>
          {" "}
          <p>Sign In</p>
        </Link>
      </div>
      <div onClick={() => changeShow()}>
        <RxCross2 />
      </div>
    </div>
  );
}
