import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
        
        <li><Link to= "/login">Login</Link></li>
        <li><Link to= "/regis">Rigistration</Link></li>
        <li><Link to= "/products">Products</Link></li>
    </ul>
  )
}

export default Nav