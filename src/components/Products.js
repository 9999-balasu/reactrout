
/*import React, { useEffect, useState } from 'react'

const Products = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setData(json))           
    },[])
  return (
    <div>
        {data.map(item => <li key={item.id}>
      <center>  <img src=  {item.image} width={100}/></center>
         
        </li>)}
        
    </div>
  )
}

export default Products*/


import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartStateContext } from './Context';

const Header = () => {
  const state = useContext(CartStateContext);
  const cartItemsCount = state.cart.length;

  return (
    <div className="bg-black text-white p-4">
      <div className="grid grid-cols-2 gap-4">
        {/* First Image and Text */}
        <div className="flex items-center space-x-4">
          <Link to={'/'}>
            <img
              src="https://up.yimg.com/ib/th?id=OIP.VCdZGesc7FHLfraz-mY1HQHaGO&pid=Api&rs=1&c=1&qlt=95&w=146&h=122"
              alt="logo"
              className="w-24 h-20"
            />
          </Link>
          <div>
            <h2 className="text-lg">First Item</h2>
            <p>Some description for the first item.</p>
          </div>
        </div>

        {/* Second Image and Text */}
        <div className="flex items-center space-x-4">
          <Link to={'/cart'}>
            <img
              src="https://up.yimg.com/ib/th?id=OIP.VCdZGesc7FHLfraz-mY1HQHaGO&pid=Api&rs=1&c=1&qlt=95&w=146&h=122"
              alt="cart"
              className="w-24 h-20"
            />
          </Link>
          <div>
            <h2 className="text-lg">Second Item</h2>
            <p>Some description for the second item.</p>
          </div>
        </div>
      </div>
      
      {/* Second Row with two more items */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Third Image and Text */}
        <div className="flex items-center space-x-4">
          <Link to={'/'}>
            <img
              src="https://up.yimg.com/ib/th?id=OIP.VCdZGesc7FHLfraz-mY1HQHaGO&pid=Api&rs=1&c=1&qlt=95&w=146&h=122"
              alt="logo"
              className="w-24 h-20"
            />
          </Link>
          <div>
            <h2 className="text-lg">Third Item</h2>
            <p>Some description for the third item.</p>
          </div>
        </div>

        {/* Fourth Image and Text */}
        <div className="flex items-center space-x-4">
          <Link to={'/cart'}>
            <img
              src="https://up.yimg.com/ib/th?id=OIP.VCdZGesc7FHLfraz-mY1HQHaGO&pid=Api&rs=1&c=1&qlt=95&w=146&h=122"
              alt="cart"
              className="w-24 h-20"
            />
          </Link>
          <div>
            <h2 className="text-lg">Fourth Item</h2>
            <p>Some description for the fourth item.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;




