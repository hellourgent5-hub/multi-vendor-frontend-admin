import React, {useEffect, useState} from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export default function Products(){
  const [products,setP]=useState([]);
  useEffect(()=>{ axios.get(`${API}/api/products`).then(r=>setP(r.data)).catch(e=>console.error(e)); },[]);
  return (<div><h2>Products</h2><ul>{products.map(p=><li key={p._id}>{p.name} — ${p.price} — {p.vendor?.shopName}</li>)}</ul></div>);
}
