import { createAction } from 'redux-actions';

export const fetchStart = createAction('FETCH_START');

export const fetchFail = createAction('FETCH_FAIL');

export const fetchSuccess = createAction('FETCH_SUCCESS');

export const dateFilter = createAction('DATE_FILTER');
