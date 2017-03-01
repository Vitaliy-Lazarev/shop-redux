import * as types from '../actions/action-types';

const initialState = {
  products: [],
  productProfile: {},
  productCart: [],
  quantity: 0
};

const productReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { products: action.products });

    case types.PRODUCT_PROFILE_SUCCESS:
      return Object.assign({}, state, { productProfile: action.productProfile });

    case types.PRODUCT_ADD_TO_CART_SUCCESS:

      function in_array(id, array) {

        for(var i = 0; i < array.length; i++)

        {
          if(array[i].id === id) {

            return array[i].quantity = +(array[i].quantity) + 1;

          }
        }

        return state.productCart.push(action.productCart);
      }

      in_array(action.productCart.id, state.productCart);

      var numQuantity = 0;
      for(var j = 0; j < state.productCart.length; j++){
        numQuantity += Number(state.productCart[j].quantity);
      }

      return Object.assign({}, state, { productCart: state.productCart , quantity: numQuantity});

    case types.DELETE_PRODUCT_SUCCESS:

      var numQuantity = 0;
      for(var j = 0; j < action.productCart.length; j++){
        numQuantity += Number(action.productCart[j].quantity);
      }

      return Object.assign({}, state, { productCart: action.productCart , quantity: numQuantity});

  }

  return state;

}

export default productReducer;
