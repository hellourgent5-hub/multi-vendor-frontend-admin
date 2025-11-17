import React, {useEffect, useState} from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export default function Vendors(){
  const [vendors,setV]=useState([]);
  useEffect(()=>{ const token=localStorage.getItem('token'); axios.get(`${API}/api/vendors`,{headers:{Authorization:`Bearer ${token}`}}).then(r=>setV(r.data)).catch(e=>console.error(e)); },[]);
  return (<div><h2>Vendors</h2><ul>{vendors.map(v=> <li key={v._id}>{v.shopName} — {v.email}</li>)}</ul></div>);
}
