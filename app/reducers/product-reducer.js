import * as types from '../actions/action-types';

const initialState = {
  products: [],
  productProfile: {
    repos: []
  },
  productCart: []
};

const productReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { products: action.products });

    case types.PRODUCT_PROFILE_SUCCESS:
      return Object.assign({}, state, { productProfile: action.productProfile });

    case types.PRODUCT_ADD_TO_CART_SUCCESS:
      return Object.assign({}, state, { productCart: action.productCart });

    case types.DELETE_PRODUCT_SUCCESS:
      return Object.assign({}, state, { productCart: action.productCart });

  }

  return state;

}

export default productReducer;
