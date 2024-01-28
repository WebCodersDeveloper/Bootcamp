import { Outlet, Route, Routes, useNavigate } from "react-router";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard/Dashboard";
import Orders from "./../pages/Orders/Orders";
import Createorder from "../pages/CreateOrder/Createorder";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Clients from "../pages/Clients/Clients";

export default function Router() {
  // const user = useSelector(state => state.login);
  // const navigate = useNavigate();
  

  // useEffect(() => {
  //   if(user.title) {
  //     navigate('/dashboard');
  //   } else {
  //     navigate('/login');
  //   }
  // }, [user, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Outlet />}>
        <Route path="createorder" element={<Createorder />} />
        <Route index element={<Orders />} />
      </Route>
      <Route path="/clients" element={<Clients />}/>
    </Routes>
  );
}
