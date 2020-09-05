import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../action";

const Login = ({ setOpen }) => {
  const dispatch = useDispatch();
  return (
    <div className="login-page">
      <h3 className="title">Login</h3>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={() =>
          dispatch(
            login({
              email: "sofyan@icube.us",
              name: "sofyan",
              fullname: "sofyan"
            })
          )
        }
      >
        {({
          values,
          handleChange,
          handleSubmit
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <label>Nama : </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <label>Password : </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            <button className="action" type="submit">Loggin</button>
            <br />
            <a onClick={() => setOpen(true)}>
              <p>Belum punya akun? Daftar!</p>
            </a>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
