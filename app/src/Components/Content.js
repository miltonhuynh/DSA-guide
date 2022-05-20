import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Content() {
  return (
    <div id="Content">
        <Outlet/>
    </div>
  )
}
