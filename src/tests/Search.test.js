import React from 'react';
import App from '../App.jsx';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SearchControl from '../components/SearchControl/SearchControl';

describe('Search', () => {
  it('should render search component', () => {
    const component = shallow(<SearchControl />);
    const wrapper = component.find('.search-right');
    expect(wrapper.length).toBe(1);
  });

  it('search text is echoed', () => {
    const wrapper = shallow(<SearchControl handleSearch={() => {}} />);
    const app = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper.find('input').simulate('change', {
      target: { value: 'Campaign 2' },
    });
    expect(app.searchText).toEqual('Campaign 2');
    //expect(wrapper.find('input').props().value).toEqual('Campaign 2');
  });

  it('checks if right search text is shared', () => {
    const wrapper = shallow(<SearchControl searchText="Campaign 2" />);
    const searchValue = wrapper.find('input').props().value;
    expect(searchValue).toEqual('Campaign 2');
  });
});
