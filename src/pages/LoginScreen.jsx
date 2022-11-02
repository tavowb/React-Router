import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/AuthTypes";

const LoginScreen = (props) => {
  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const hadleLogin = () => {
    navigate("/men");
    dispatch({
      type: AuthTypes.login,
    });
  };

  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="animación" />
      <h1 className="my-3">Login Screen</h1>
      <button className="btn btn-primary" onClick={hadleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
