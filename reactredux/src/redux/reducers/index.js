import {combineReducer} from 'redux';
import {productReducers,selectedProductReducer} from './ProductReducers';
const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
})

export default reducers;