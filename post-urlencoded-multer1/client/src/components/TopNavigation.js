import React from 'react'
import { Link } from 'react-router-dom'

function TopNavigation() {
  return (
   <nav>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/tasks">Tasks</Link>
    <Link to="/leaves">Leaves</Link>
    <Link to="/">Logout</Link>
   </nav>
  )
}

export default TopNavigation
