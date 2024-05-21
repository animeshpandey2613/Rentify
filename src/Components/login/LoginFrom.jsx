import React, { useState, useEffect } from "react";
import "./login.css";
import CatchAsyncError from "../../utils/CatchAsyncError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { FaRegEye } from "react-icons/fa";
import SkyScrapper from "../../images/login/Wallpaper.jpg";
export default function Login({ setLoggedIn, loggedIn }) {
  const [Input, setInput] = useState({
    phoneNumber: "",
    password: "",
  });
  const LoginHandler = CatchAsyncError(async (e) => {
    e.preventDefault();
    // console.log(Input);
    const resp = await axios.post(
      "https://rainbow-sunflower-70fdd9.netlify.app/api/users/login",
      Input
    );
    localStorage.setItem("Authentication", resp.data.token);
    localStorage.setItem("phoneNumber", Input.phoneNumber);
    setLoggedIn(true);
  });

  useEffect(() => {
    if (loggedIn) {
      window.location.href = "/user/home";
    }
  }, [loggedIn]);
  //

  const inputHandler = (e) => {
    setInput((temp) => {
      return { ...temp, [e.target.name]: e.target.value };
    });
  };

  const [seeThrough, setSeeThrough] = useState(false);
  return (
    <div className="LoginContainer">
      <div className="LoginLoginPart1">
        <div className="LoginHeading">Login to your account</div>
        <div className="LoginSocialmediaArea">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="LoginIcons" />
          <FontAwesomeIcon icon={faTwitter} size="2x" className="LoginIcons" />
          <FontAwesomeIcon icon={faGoogle} size="2x" className="LoginIcons" />
        </div>
        <div className="LoginSmallText">or Sign In with your Phone Number</div>
        <div className="LoginCover">
          <CiMail />{" "}
          <input
            type="text"
            className="LoginEmailID"
            name="phoneNumber"
            placeholder="+91-XXXXX-XXXXX"
            onKeyUpCapture={inputHandler}
          />
        </div>
        <div className="LoginCover">
          <CiLock />
          <input
            type={seeThrough ? `text` : `password`}
            className="LoginEmailID"
            placeholder="Password"
            name="password"
            onKeyUpCapture={inputHandler}
          />
          <div className="Logineye" onClick={() => setSeeThrough(!seeThrough)}>
            {seeThrough ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>
        <div className="LoginforgetPass">Forget password?</div>
        <button className="LoginButton" onClick={LoginHandler}>Login</button>
      </div>
      <div className="LoginLoginPart2">
        <img src={SkyScrapper} className="LoginBackPart2" alt="imagearea" />
        <div className="LoginHeading">Welcome Back !</div>
        <div className="LoginSmallText">
          Please SignIn to your account
          <br /> to continue
        </div>
        <div className="LoginSmallText">
          New Here? Create a <br /> new Account
        </div>
        <button className="LoginButton" onClick={()=>(window.location.href = "/signup")}>Sign Up</button>
      </div>
    </div>
  );
}
