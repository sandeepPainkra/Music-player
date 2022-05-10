import React, { useEffect, useState } from "react";
import { loginEndPoint } from "../../spotify";
import "./Login.css";
import { SiSpotify } from "react-icons/si";

const Login = () => {
  return (
    <div className="login">
      <div className="login_container">
        <h1>Welcome To Our Music Streaming App</h1>
        <a href={loginEndPoint} className="login_btn">
          Login with spotify
        </a>
      </div>
    </div>
  );
};

export default Login;
