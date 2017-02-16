import { combineReducers } from 'redux';

// Reducers
import productReducer from './product-reducer';
import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
  productState: productReducer,
  searchLayoutState: searchLayoutReducer
});

export default reducers;
