/*import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className='flex items-center justify-between py-5 font-medium m-2 p-2'>
        
        <li><Link to= "/login">Login</Link></li>
        <li><Link to= "/regis">Rigistration</Link></li>
        <li><Link to= "/products">Products</Link></li>
        <li><Link to= "/productlisting">ProductListing</Link></li>
        <li><Link to= "/data">Data</Link></li>
    </ul>
  )
}

export default Nav*/


/*import { Link } from 'react-router-dom'
import {useCartState} from  './Context'

//import { useContext } from 'react';
const Header = () => {
  //const state = useContext(CartStateContext);
  const state = useCartState();
 const cartItemsCount = state.cart .length
  
  return (
    <div style={{backgroundColor:'black',color:'white', display : 'flex',flexDirection : 'row'}}>
     
      <div style={{width : '80%'}}>
      <Link to={'/'}>
<img src="https://up.yimg.com/ib/th?id=OIP.VCdZGesc7FHLfraz-mY1HQHaGO&pid=Api&rs=1&c=1&qlt=95&w=146&h=122" alt='logo' width={100} height={80}/>
     
      </Link>
      </div>
      <Link to={'/cart'}> <div style={{width:'20%',padding : '5px',color:'white'}}>
        <span style={{}}>CART</span>
        <span style={{marginLeft:'20px'}}>{cartItemsCount}</span>
        </div></Link>
     
    </div>
  )
}

export default Header*/


import { Link } from 'react-router-dom';
import { useCartState } from './Context';

const Header = () => {
  const state = useCartState();
  const cartItemsCount = state.cart.length;

  return (
    <div className="bg-black text-white flex justify-between items-center p-4">
      <Link to={'/'}>
        <img
          src="https://up.yimg.com/ib/th?id=OIP.VCdZGesc7FHLfraz-mY1HQHaGO&pid=Api&rs=1&c=1&qlt=95&w=146&h=122"
          alt="Shop Logo"
          className="w-24 h-20"
        />
      </Link>

      <Link to={'/cart'} className="flex items-center space-x-4">
        <span className="text-lg">CART</span>
        <span className="text-lg">{cartItemsCount}</span>
      </Link>
    </div>
  );
};

export default Header;
