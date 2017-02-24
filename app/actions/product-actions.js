import * as types from '../actions/action-types';

export function getProductsSuccess(products) {

  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products
  };
}

export function addToCartProductsSuccess(productCart) {

  return {
    type: types.PRODUCT_ADD_TO_CART_SUCCESS,
    productCart
  };

}

export function deleteCartProductSuccess(productCart) {

  return {
    type: types.DELETE_PRODUCT_SUCCESS,
    productCart
  };

}

export function productProfileSuccess(productProfile) {
  return {
    type: types.PRODUCT_PROFILE_SUCCESS,
    productProfile
  };
}



