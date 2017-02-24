import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {

  let urlImg = '../' + props.image_url;

  console.log(props);

  function updateItem() {
    const input = document.getElementById('myInput');
    props.addCartProduct(props.id, input.value);
  }

  return (
    <div className="product-profile">
      <div className="details">
        <div className="left-block">
          <img src={urlImg} alt={props.name} />
        </div>
        <div className="right-block">
          <h1>{props.name}</h1>
          <h4>{props.price}</h4>
          <p>{props.description}</p>
          <p>{props.brand}</p>
          <p>{props.sku}</p>
          <input type="number" id="myInput" value={props.quantity}/>
          <button onClick={updateItem}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
