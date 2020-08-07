import * as actionTypes from '../actions/actionType';

const initialState = {
  data: null,
  error: null,
  loading: false,
  campData: null,
};
export default function campaign(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case actionTypes.FETCH_FAIL:
      return { ...state, error: action.error, loading: false };
    case actionTypes.FILTER_DATA_START:
      return { ...state, loading: true };

    case actionTypes.DATE_FILTER:
      return {
        ...state,
        data: action.payload.jsondata.data.filter((el) => {
          return (
            action.payload.startDate <= new Date(el.startDate) &&
            action.payload.endDate >= new Date(el.endDate)
          );
        }),
        loading: false,
      };
    default:
      return state;
  }
}
