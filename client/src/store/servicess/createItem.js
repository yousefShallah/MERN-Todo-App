


import { createItemLoading, createItemLoaded, createdItem } from '../reducers/createItemReducer';
import axios from 'axios';

export function createItemFunc(data) {
    console.log("data", data);
    return async dispatch => {
        try {
        dispatch(createItemLoading())
        axios({
          method: 'post',
          url: `http://localhost:5000/create-item`,
          body: data,
          responseType: 'json',
          headers: { 
          "Access-Control-Allow-Origin": "*"
          }
        })
        .then(function (response) {
          dispatch(createdItem(response.data))
          dispatch(createItemLoaded())
        });
      } catch (error) {
        dispatch(createItemLoading())
        console.log("error:", error);
      }
    }
  }