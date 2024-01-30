import { Outlet, Route, Routes, useNavigate, useLocation } from "react-router";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard/Dashboard";
import Orders from "./../pages/Orders/Orders";
import Createorder from "../pages/CreateOrder/Createorder";
import { useEffect } from "react";
import Clients from "../pages/Clients/Clients";

import Client from "../pages/Client/Client";

export default function Router() {
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
  }, [navigate, location]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Outlet />}>
        <Route path="createorder" element={<Createorder />} />
        <Route index element={<Orders />} />
      </Route>
      <Route path="/clients" element={<Outlet />} >
        <Route path=":id" element={<Client />} />
        <Route index element={<Clients />} />
      </Route>
    </Routes>
  );
}
