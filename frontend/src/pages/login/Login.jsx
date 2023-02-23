import React, { useContext, useRef } from "react";
import "./Login.css";
import { LoginCall } from "../../state/ActionCalls";
import { AuthContext } from "../../state/AuthContext";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    LoginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  return (
    <div className="login">
      {/* <img src="assets/cube/float 1.png" alt="" className="human" /> */}
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginTitle">🦄🌈🤘 /like</h3>
          <span className="loginDesc"></span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleClick(e)}>
            <p className="loginMsg"></p>
            <input
              type="email"
              className="loginInput"
              placeholder="📩"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="🔐"
              required
              minLength={6}
              ref={password}
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">🔐❓👈</span>
            <button className="loginRegisterButton">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
