import React from 'react';
import { connect } from 'react-redux';
import ProductCart from '../views/product-cart';


const ProductCartContainer = React.createClass({

render: function() {

  return (
    <ProductCart {...this.props.productCart} />
  );
}

});

const mapStateToProps = function(store) {

  return {
    productCart: store.productState.productCart
  };

};

export default connect(mapStateToProps)(ProductCartContainer);
