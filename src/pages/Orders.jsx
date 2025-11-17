import React, {useEffect, useState} from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export default function Orders(){
  const [orders,setO]=useState([]);
  useEffect(()=>{ const token=localStorage.getItem('token'); axios.get(`${API}/api/orders`,{headers:{Authorization:`Bearer ${token}`}}).then(r=>setO(r.data)).catch(e=>console.error(e)); },[]);
  return (<div><h2>Orders</h2><ul>{orders.map(o=><li key={o._id}>Order {o._id} — ${o.totalPrice} — {o.status}</li>)}</ul></div>);
}
