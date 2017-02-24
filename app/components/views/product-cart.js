import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {

  let headTable = (
      <tr className='headStrong'>
        <td className="text-center">Image</td>
        <td className="text-left">Product Name</td>
        <td className="text-left">Brand</td>
        <td className="sku">Sku</td>
        <td className="text-left">Quantity</td>
        <td className="text-right">Price</td>
        <td className="text-right">Total</td>
        <td className="text-right"></td>
      </tr>
  )

  let emptyCart = (<tr className='emptyCart'>Cart Empty</tr>)
  let amount = 0;

  return (
    <div className="product-cart">
      <div className="details">
        <form>
          <table className="table">
            <thead>
              {Object.keys(props).length ? headTable : emptyCart}
            </thead>
            <tbody>
                    {Object.keys(props).map((item, index) => {

                      var totalProduct = props[item].quantity * (+(props[item].price).replace('$',''));

                      amount += totalProduct;

                      return (
                        <tr className="cart-product" key={index}>
                          <td><a href={props[item].url}><img className="img-responsive" src={props[item].image_url} alt={props[item].name} title={props[item].name} /></a></td>
                          <td className="name"><a href={props[item].url}>{props[item].name}</a></td>
                          <td className="brand">{props[item].brand}</td>
                          <td className="sku">{props[item].sku}</td>
                          <td className="Quantity">{props[item].quantity}</td>
                          <td className="price">{props[item].price}</td>
                          <td className="total">{'$' + totalProduct.toFixed(2)}</td>
                          <td className="delete"><button onClick={props[item].deleteCartProduct.bind(this, props[item].id)}>Delete</button></td>
                        </tr>
                      );

                    })}
            </tbody>
          </table>
          <div className={Object.keys(props).length ? 'show' : 'hide'}><strong>Total: {'$' + amount.toFixed(2)}</strong></div>
        </form>
      </div>
    </div>
  );
}


