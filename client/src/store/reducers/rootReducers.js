import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import createItemReducer from './createItemReducer';

export default combineReducers({
    items: itemsReducer,
    createItem: createItemReducer
});