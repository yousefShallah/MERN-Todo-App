
import { itemsLoading, itemsLoaded, fetchItems } from '../reducers/itemsReducer';
import axios from 'axios';
import { URL } from '../storeUtils';

export function fetchItemsFunc(page) {
    return async dispatch => {
        try {
        dispatch(itemsLoading())
        axios({
          method: 'get',
          url: `http://localhost:5000/items?page=${page}`,
          responseType: 'json',
          headers: { 
          "Access-Control-Allow-Origin": "*"
        }
        })
        .then(function (response) {
          dispatch(fetchItems(response.data))
          dispatch(itemsLoaded())
        });
      } catch (error) {
        dispatch(itemsLoading())
        console.log("error:", error);
      }
    }
  }