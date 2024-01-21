// import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard/Dashboard';
import { Route, Routes } from 'react-router';
import Orders from './pages/Orders/Orders';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/orders' element={<Orders />}/>
      </Routes>
      
    </>
  )
}
