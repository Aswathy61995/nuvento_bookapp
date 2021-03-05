
import React from "react";


function ProductstylingController({ title, price, imagePath,}) {
 
  return (
    <div className="product">
        <p className="imagePath">
    <img src= {imagePath} width="150px" height="250px"></img>
        </p>
       <div className="product__info">
        <p>{title}</p>
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
         </p>
       <button>Add to Basket</button>
      </div>
    
    
     
  );
}

export default ProductstylingController;