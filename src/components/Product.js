
/*import React from 'react'

const Product = ({title,imageurl,rating,price}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <h3>{rating}</h3>
        <img src = {imageurl} alt='ProductTmage' width={300} height={300}/>
    </div>
  )
}

export default Product*/


import React from 'react';

const Product = ({ title, price, imageurl, rating }) => {
    return (
        <div className="flex items-center p-4 bg-white shadow-md rounded-lg mb-4">
            {/* Left side: Image */}
            <div className="w-1/3">
                <img src={imageurl} alt={title} className="object-cover w-full h-full rounded-lg" />
            </div>

            {/* Right side: Text and Buttons */}
            <div className="w-2/3 pl-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600">Price: ${price}</p>
                <p className="text-yellow-500">Rating: {rating} / 5</p>
                
                {/* Buttons */}
                <div className="mt-4 space-x-2">
                    
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
