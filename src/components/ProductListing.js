
/*import React, { useEffect, useState } from 'react'
import Product from '../components/Product.js'


const ProductListing = () => {
    const[products,setProducts]= useState([])
    useEffect(()=>{
async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products') 
  const data =await response.json()
  setProducts(data)
 
}
getProducts();
    },[])
  return (
    <div>
        <h1>Proucts Details</h1>
        {products && products.map(product=>
        <Product 
       
          title ={product.title} 
        price ={product.price} 
        imageurl={product.image}
        rating={product.rating.rate}
       
        />)}
    </div>
  )
}

export default ProductListing*/

import React, { useEffect, useState } from 'react';
import Product from '../components/Product.js';

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        getProducts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Product Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products && products.map(product => (
                    <Product
                        key={product.id} 
                        title={product.title}
                        price={product.price}
                        imageurl={product.image}
                        rating={product.rating.rate}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
