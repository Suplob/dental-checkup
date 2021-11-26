import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function App() {
  const [credentials, setCredentials] = useState({});
  const { handlePasswordRegister, error } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setCredentials(data);
    handlePasswordRegister(name, email, password);
  };

  const captureName = (e) => {
    setName(e.target.value);
  };
  const captureEmail = (e) => {
    setEmail(e.target.value);
  };
  const capturePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="active"> Register </h2>
          <br />
          <input
            {...register("name", { required: true })}
            type="text"
            className="fadeIn second"
            placeholder="name"
            onBlur={captureName}
          />
          <br />
          <input
            {...register("email", { required: true })}
            type="text"
            className="fadeIn second"
            placeholder="email"
            onBlur={captureEmail}
          />
          <br />
          <input
            {...register("password", { required: true })}
            type="password"
            className="fadeIn second"
            placeholder="password"
            onBlur={capturePassword}
          />
          <br />

          {errors.exampleRequired && (
            <span className="text-danger">This field is required</span>
          )}

          <input type="submit" />
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
}
