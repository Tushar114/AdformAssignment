import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
