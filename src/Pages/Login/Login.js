import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const { handleGoogleLogin, handlePasswordLogin, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const captureEmail = (e) => {
    setEmail(e.target.value);
  };
  const capturePassword = (e) => {
    setPassword(e.target.value);
  };
  const sendData = () => {
    handlePasswordLogin(email, password);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="active"> Log In </h2>
          <input
            {...register("email")}
            type="email"
            className="fadeIn second"
            placeholder="email"
            onBlur={captureEmail}
          />
          <input
            {...register("password", { required: true })}
            type="password"
            className="fadeIn second"
            placeholder="password"
            onBlur={capturePassword}
          />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />

          <div
            className="d-flex rounded bg-light justify-content-center p-2 w-50 mx-auto align-items-center"
            style={{ cursor: "pointer" }}
            onClick={handleGoogleLogin}
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt=""
            />
            <span className="ms-2">Login with google</span>
          </div>
          <br />
          <button
            className="btn-regular"
            onClick={() => handlePasswordLogin(email, password)}
          >
            LOG IN
          </button>
          <br />
          <Link to="/login" className="link-default">
            <p className="mb-2">
              <span className="ms-2">Already registered? Login</span>
            </p>
          </Link>

          <br />
          <span clas="text-danger">{error}</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
