import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../action";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = ({ setOpen }) => {
  const dispatch = useDispatch();
  const RegisterSchemaValidation = Yup.object().shape({
    fullname: Yup.string()
      .min(5, "fullname Too Short!")
      .max(50, "fullname Too Long!")
      .required("fullname is required"),
    email: Yup.string().email("email not valid").required("email is required"),
    password: Yup.string()
      .min(5, "password min 5 caracter")
      .required("password is required"),
    telephone: Yup.number()
      .min(10, 'Phone Number to short')
  });
  const formRegister = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      telephone: ""
    },
    validationSchema: RegisterSchemaValidation,
    onSubmit: (values) => {
      dispatch(register(values));
    }
  });
  return (
    <form className="register" onSubmit={formRegister.handleSubmit}>
      <h3 className="title">Register</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <input
          type="fullname"
          name="fullname"
          placeholder="name"
          onChange={formRegister.handleChange}
          value={formRegister.values.fullname}
          style={{ marginBottom: 20 }}
        />
        {formRegister.touched.fullname && formRegister.errors.fullname && (
          <p style={{ color: "red" }}>{formRegister.errors.fullname}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={formRegister.handleChange}
          value={formRegister.values.email}
          style={{ marginBottom: 20 }}
        />
        {formRegister.errors.email && (
          <p style={{ color: "red" }}>{formRegister.errors.email}</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={formRegister.handleChange}
          value={formRegister.values.password}
          style={{ marginBottom: 20 }}
        />
        {formRegister.errors.password && (
          <p style={{ color: "red" }}>{formRegister.errors.password}</p>
        )}

        <input
          type="number"
          name="telephone"
          placeholder="telephone"
          onChange={formRegister.handleChange}
          value={formRegister.values.telephone}
          style={{ marginBottom: 20 }}
        />
        {formRegister.errors.telephone && (
          <p style={{ color: "red" }}>{formRegister.errors.telephone}</p>
        )}
      </div>
      <button type="submit">Register</button>
      <br />
      <a onClick={() => setOpen(false)}>
        <p>Sudah punya akun? Login!</p>
      </a>
    </form>
  );
};

export default Register;
