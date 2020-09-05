import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SucessLogin = () => {
  return (
    <div className="Success">
      <h1>LOGIN BERHASIL !</h1>
      <h3>Silakan kunjungi profil anda</h3>
        <li><Link to="/profile"> Profile </Link> </li>
    </div>
  )
}
const UserComponents = () => {
  const data = useSelector((state) => state.user);
  const [openRegister, setOpen] = React.useState(false);
  return (
    <>
      {data.user === null ? (
        openRegister ? (
          <Register setOpen={setOpen} />
        ) : (    
          <Login setOpen={setOpen} />
        )
      ) : (
        <SucessLogin />
      )}
    </>
  );
};

export default UserComponents;
