// import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
      
    </>
  )
}
