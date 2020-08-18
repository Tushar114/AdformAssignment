import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

import SearchControl from '../components/SearchControl/SearchControl';
import renderer from 'react-test-renderer';

describe('App', () => {
  //   it('should render correctly', () => {
  //     const component = shallow(<App />);
  //     expect(component).toMatchSnapshot();
  //   });
  it('should render loader', () => {
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    component.isLoading = true;
  });
});
