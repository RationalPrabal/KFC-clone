import React, { useContext } from "react";
import { TfiLineDotted } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./Hamburger-options";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function Navbar() {
  const [show, setShow] = React.useState(false);
  const { isAuth, getUserId } = useContext(AuthContext);

  function changeShow() {
    setShow(false);
  }

  React.useEffect(() => {
    getUserId();
  }, []);
  return (
    <nav className="lg:w-[95%] m-auto flex justify-between  items-center w-full relative font-bold">
      <div className="lg:flex w-[25%] justify-between hidden">
        <div>
          <Link to={"/"}>
            <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" />
          </Link>
        </div>
        <Link to={"/menu"}>
          {" "}
          <div>Menu</div>
        </Link>
        <Link to={"/deals"}>
          {" "}
          <div>Deals</div>
        </Link>
      </div>
      <div onClick={() => setShow(!show)}>
        <GiHamburgerMenu className="lg:hidden" />
      </div>
      <div className="flex w-[15%] items-center lg:justify-between justify-end  ">
        <div className="hidden lg:flex">
          <Link to={"/account"}>
            <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" />
          </Link>
        </div>
        <Link to={"/account"}>
          <div className="hidden lg:flex">
            {!isAuth ? "Sign In" : "Profile"}
          </div>
        </Link>
        <div className="hidden lg:flex">
          <TfiLineDotted className="rotate-90 text-lg" />
        </div>
        <div className="w-8 lg:w-12  ">
          <Link to={"/cart"}>
            {" "}
            <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" />
          </Link>
        </div>
      </div>

      {show ? (
        <div className="absolute top-0 left-0 right-20">
          <Hamburger changeShow={changeShow} />
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
