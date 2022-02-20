import { combineReducers } from 'redux';
import {productReducer} from './productReducer'
import {selectedProdReducer} from './productReducer'
const reducers= combineReducers({
    productReducer,
    selectedProdReducer
})

export default reducers;