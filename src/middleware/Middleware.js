import { API_URL } from '../constant';
import { fetchStart, fetchSuccess, fetchFail } from '../actions';
import axios from 'axios';

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    let url = API_URL;
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
