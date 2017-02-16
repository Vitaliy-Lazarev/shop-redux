import React from 'react';
import { connect } from 'react-redux';
import ProductProfile from '../views/product-profile';
import * as productApi from '../../api/product-api';

const ProductProfileContainer = React.createClass({

  componentDidMount: function() {
    let productId = this.props.params.productId
    productApi.getProfile(productId)
  },

  render: function() {

    return (
      <ProductProfile {...this.props.profile} addCartProduct={productApi.addCartProduct}/>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.productState.productProfile
  };
};

export default connect(mapStateToProps)(ProductProfileContainer);
