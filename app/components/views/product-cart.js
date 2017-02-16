import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {

  return (
    <div className="product-cart">
      <div className="details">
        <form>
          <table className="table">
            <thead>
            <tr>
              <td className="text-center">Image</td>
              <td className="text-left">Product Name</td>
              <td className="text-left">Brand</td>
              <td className="sku">Sku</td>
              <td className="text-left">Quantity</td>
              <td className="text-right">Price</td>
              <td className="text-right">Total</td>
              <td className="text-right"></td>
            </tr>
            </thead>

            <tbody>
                    {Object.keys(props).map((item, index) => {

                      return (
                        <tr className="cart-product" key={index}>
                          <td><a href={props[item].url}><img className="img-responsive" src={props[item].image_url} alt={props[item].name} title={props[item].name} /></a></td>
                          <td className="name"><a href={props[item].url}>{props[item].name}</a></td>
                          <td className="brand">{props[item].brand}</td>
                          <td className="sku">{props[item].sku}</td>
                          <td className="Quantity">{props[item].quantity}</td>
                          <td className="price">{props[item].price}</td>
                          <td className="price">{props[item].price}</td>
                          <td className="delete"><button onClick={props[item].deleteCartProduct.bind(null, props[item].id)}>Delete</button></td>

                        </tr>
                      );

                    })}




            </tbody>
          </table>
          <div><strong>Total</strong></div>
        </form>
      </div>
    </div>
  );
}


