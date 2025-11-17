import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './pages/Dashboard';
import Vendors from './pages/Vendors';
import Products from './pages/Products';
import Orders from './pages/Orders';

export default function App(){
  return (
    <div>
      <AdminNavbar />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/vendors" element={<Vendors/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  );
}
