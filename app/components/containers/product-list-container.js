import React from 'react';
import { connect } from 'react-redux';
import ProducstList from '../views/product-list';
import * as productApi from '../../api/product-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const ProdcutListContainer = React.createClass({

  componentDidMount: function() {
    productApi.getProducts();
    store.dispatch(loadSearchLayout('products', 'Products Results'));
  },

  render: function() {
    return (
      <ProducstList products={this.props.products} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    products: store.productState.products
  };
};

export default connect(mapStateToProps)(ProdcutListContainer);
