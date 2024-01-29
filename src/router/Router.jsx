import { Outlet, Route, Routes, useNavigate } from "react-router";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard/Dashboard";
import Orders from "./../pages/Orders/Orders";
import Createorder from "../pages/CreateOrder/Createorder";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Clients from "../pages/Clients/Clients";

export default function Router() {
  const user = useSelector(state => state.login);
  const navigate = useNavigate();
  const login = localStorage.getItem('login');
  console.log(login);
  const savedLogin = JSON.parse(localStorage.getItem("login"));
  // useEffect(() => {
  //   const savedLogin = JSON.parse(localStorage.getItem('login'));
  //   if(!savedLogin?.name || user.title && location.pathname !== '/login') {
  //     navigate('/login'); 
  //   }
  
  //   if(savedLogin?.name || user.title && location.pathname === '/login') {
  //     navigate('/dashboard');
  //   }
  // }, [user, navigate, location]);


  useEffect(() => {
    // Redirect to login if there is no saved login data
    if (!savedLogin?.name && location.pathname !== "/login") {
      navigate("/login");
    }

    // Redirect to dashboard if there is saved login data
    if (savedLogin?.name && location.pathname === "/login") {
      navigate("/dashboard");
    }
  }, [savedLogin, location, navigate]);

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
