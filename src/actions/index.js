import * as actionTypes from './actionType';
import axios from 'axios';
const jsondata = require('../data.json');

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START,
  };
};
export const fetchFail = (error) => {
  return {
    type: actionTypes.FETCH_FAIL,
    error: error,
  };
};
export const fetchSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    data: data,
  };
};

export const fetch = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    let url = 'https://jsonplaceholder.typicode.com/users';
    axios
      .get(url)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const dateFilter = (start, end) => {
  return {
    type: actionTypes.DATE_FILTER,
    payload: {
      start,
      end,
      jsondata,
    },
  };
};
