// import React, {useState} from "react"
// import { PRODUCTS } from "../../products"
// import {Product} from './product'
// import './shop.css'



// export const Shop = () => {
   
//     return (
//     <div className="shop">
//         <div className="shopTitle">
//             <h1>Lullaby</h1>
//         </div>

//         <div className="whole">
//         <input className="bar" type="text" placeholder="Enter Item"></input>
//         <button className="search">Search</button>
        
//         </div>


//         <div className="products"> 
//             {PRODUCTS.map((product) => (
//             <Product data={product} />
//         ))}

//         </div>
//     </div>
//     )
// }




import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from './product';
import './shop.css';

export const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  // Handle the search query input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on the search query
  const handleSearch = () => {

   const filtered = PRODUCTS.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Lullaby</h1>
      </div>

      <div className="whole">
        <input
          className="bar"
          type="text"
          placeholder="Enter Item"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search" onClick={handleSearch}>Search</button>
      </div>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};
