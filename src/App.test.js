import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

import SearchControl from './components/SearchControl/SearchControl';
import renderer from 'react-test-renderer';

describe('App', () => {
  //   it('should render correctly', () => {
  //     const component = shallow(<App />);
  //     expect(component).toMatchSnapshot();
  //   });
  const container = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  it('should verify search component props app.js', () => {
    const wrapper = shallow(<SearchControl />);
    wrapper.find('input[type="text"]').simulate('change', {
      target: {
        value: 'Campaign 2',
      },
    });

    expect(container.find(SearchControl).prop('searchText')).toEqual(
      'Campaign 2'
    );
  });
});
