import React, { useRef } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    //パスワードと確認用パスワードが合っているかどうか確認
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワード違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        //registerAPIを叩く
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerTitle">🦄🌈🤘 /like</h3>
          <span className="registerDesc"></span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={(e) => handleClick(e)}>
            <p className="registerMsg"></p>
            <input
              type="text"
              className="registerInput"
              placeholder="🧙🏻‍♂️"
              required
              ref={username}
            />
            <input
              type="email"
              className="registerInput"
              placeholder="📩"
              required
              ref={email}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="🔐"
              required
              minLength={6}
              ref={password}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="🔐👀"
              required
              minLength={6}
              ref={passwordConfirmation}
            />
            <button className="registerButton" type="submit">
              Create Account
            </button>
            <button className="loginButton">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
