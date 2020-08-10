import { createAction } from 'redux-actions';

export const fetchUserStart = createAction('FETCH_START');

export const fetchUserFail = createAction('FETCH_FAIL');

export const fetchUserSuccess = createAction('FETCH_SUCCESS');

export const dateFilter = createAction('DATE_FILTER');
