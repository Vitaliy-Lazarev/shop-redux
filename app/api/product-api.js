import axios from 'axios';
import store from '../store';
import { getProductsSuccess, deleteCartProductSuccess, productProfileSuccess, addToCartProductsSuccess} from '../actions/product-actions';
import _ from 'lodash';

/**
 * Get all products
 */

export function getProducts() {
  return axios.get('http://localhost:3001/products')
    .then(response => {
      store.dispatch(getProductsSuccess(response.data));
      return response;
    });
}

/**
 * Search Products
 */

export function searchProducts(query = '') {
  return axios.get('http://localhost:3001/products?q='+ query)
    .then(response => {
      store.dispatch(getProductsSuccess(response.data));
      return response;
    });
}

/**
 * Delete cart a product
 */

export function deleteCartProduct(productId, event) {

  event.preventDefault();

  let StateProductCart = store.getState().productState.productCart;

  let newStateProductCart = _.filter(StateProductCart, function(item){

    return item.id !== productId;

  });


  store.dispatch(deleteCartProductSuccess(newStateProductCart));

  return;

}

/**
 * Add a product to cart
 */

export function addCartProduct(productId, quantity) {

  let products = {};

  return axios.get('http://localhost:3001/products/' + productId)
    .then(response => {

      let product = response.data;
      products.name = product.name;
      products.price = product.price;
      products.brand = product.brand;
      products.description = product.description;

      products.sku = product.sku;
      products.image_url = product.image_url;
      products.quantity = quantity;
      products.id = product.id;
      products.deleteCartProduct = deleteCartProduct;

      store.dispatch(addToCartProductsSuccess(products));

      return;

    });

}


/**
 * Profile a product
 */

export function getProfile(productId) {

  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let profile = {};

  // Get the user data from our local database.
  return axios.get('http://localhost:3001/products/' + productId)
    .then(response => {

      let product = response.data;
      profile.name = product.name;
      profile.price = product.price;
      profile.brand = product.brand;
      profile.description = product.description;
      profile.quantity = product.quantity;
      profile.id = product.id;

        profile.sku = product.sku;
        profile.image_url = product.image_url;

      store.dispatch(productProfileSuccess(profile));

      return;

    });

}

