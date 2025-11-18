import React from 'react';
import { Link } from 'react-router-dom';
export default function AdminNavbar(){ return (<nav><Link to='/'>Dashboard</Link> | <Link to='/vendors'>Vendors</Link> | <Link to='/products'>Products</Link> | <Link to='/orders'>Orders</Link></nav>); }
