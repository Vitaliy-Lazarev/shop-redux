import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="product-profile">
      <div className="details">
        <div className="left-block">
          <img src={props.image_url} alt={props.name} />
        </div>
        <div className="right-block">
          <h1>{props.name}</h1>
          <h4>{props.price}</h4>
          <p>{props.description}</p>
          <p>{props.brand}</p>
          <p>{props.sku}</p>

          <button onClick={props.addCartProduct.bind(null, props.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
