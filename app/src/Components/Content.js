import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Content() {
  return (
    <div id="Content">
        CONTENT PLACEHOLDER
        <Link to="/DSA-guide/BinarySearch">Invoices</Link> 
        <Outlet/>
    </div>
  )
}
