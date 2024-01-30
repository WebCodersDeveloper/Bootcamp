import { Outlet, Route, Routes, useNavigate, useLocation } from "react-router";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard/Dashboard";
import Orders from "./../pages/Orders/Orders";
import Createorder from "../pages/CreateOrder/Createorder";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Clients from "../pages/Clients/Clients";

import Client from "../pages/Client/Client";

export default function Router() {
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedLogin = JSON.parse(localStorage.getItem("login"));
    if (!savedLogin?.name && location.pathname !== "/login") {
      navigate("/login");
    }

    if (savedLogin?.name && location.pathname === "/login") {
      navigate("/dashboard");
    }
  }, [user, navigate, location]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Outlet />}>
        <Route path="createorder" element={<Createorder />} />
        <Route index element={<Orders />} />
      </Route>
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/:id" element={<Client />} />
    </Routes>
  );
}
