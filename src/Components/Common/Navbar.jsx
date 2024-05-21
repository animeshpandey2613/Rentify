import React from "react";
import "./Navbar.css";
import Logo from "../../images/logo.avif";
function Navbar() {
  return (
    <div className="Navbarcontainer">
      <div className="NavbarlogoArea">
        <div className="Navbarheading">Rentify</div>
        <div className="NavbarimageArea">
          <img src={Logo} alt="" className="NavbarimageLogo" />
        </div>
      </div>
      <div className="NavbarleftArea">
        <div className="button" onClick={()=>(window.location.href = "/sell")}>Sell</div>
        <div className="button" onClick={()=>(window.location.href = "/login")}>
          Login
        </div>
      </div>
    </div>
  );
}

export default Navbar;
