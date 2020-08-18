import React from 'react';
import CampaignTable from '../components/CampaignList/Camptable';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('Campaign List', () => {
  //   it('Matches the snapshot', () => {
  //     const component = renderer
  //       .create(
  //         <Provider store={store}>
  //           <CampaignTable />
  //         </Provider>
  //       )
  //       .toJSON();
  //     expect(component).toMatchSnapshot();
  //   });
  it('Test the no of columns', () => {
    const component = mount(
      <Provider store={store}>
        <CampaignTable />
      </Provider>
    );
    const wrapper = component.find('tr');
    expect(wrapper.length).toBe(6);
  });
});
