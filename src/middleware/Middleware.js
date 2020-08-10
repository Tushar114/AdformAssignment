import { API_URL } from '../constant';
import { fetchUserStart, fetchUserSuccess, fetchUserFail } from '../actions';
import axios from 'axios';

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserStart());
    let url = API_URL;
    axios
      .get(url)
      .then((res) => {
        dispatch(fetchUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUserFail(err));
      });
  };
};
