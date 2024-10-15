import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className='flex items-center justify-between py-5 font-medium m-2 p-2'>
        
        <li><Link to= "/login">Login</Link></li>
        <li><Link to= "/regis">Rigistration</Link></li>
        <li><Link to= "/products">Products</Link></li>
        <li><Link to= "/productlisting">ProductListing</Link></li>
    </ul>
  )
}

export default Nav