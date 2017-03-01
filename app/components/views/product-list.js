import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {

  function updateItem(id, quantity) {
    props.addCartProduct(id, quantity);
  }

  return (
    <div className="data-list">

      {props.products.map(product => {

        return (
          <div key={product.id} className="data-list-item">
            <div className="details">
              <img src={product.image_url} alt={product.name}/>
              <Link to={'/products/' + product.id}>{product.name}</Link>
              <div className="price">{product.price}</div>
              <div className="description">{product.description}</div>
              <button onClick={updateItem.bind(this, product.id, product.quantity)}>Add to Cart</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
