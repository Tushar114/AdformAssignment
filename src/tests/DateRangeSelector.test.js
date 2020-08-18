import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import renderer from 'react-test-renderer';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DateRangeSelector from '../components/DateRangeSelector/DateRangeSelector';
import { ReduxProvider } from '../utility';

describe('DatePicker Test', () => {
  it('should render <DateRangeSelector/> component', () => {
    const dateComp = renderer
      .create(
        <Provider store={store}>
          <DateRangeSelector />
        </Provider>
      )
      .toJSON();
    expect(dateComp).toMatchSnapshot();
  });

  it('check DatePicker popup open', () => {
    const DateComponent = mount(
        <Provider store={store}>
          <DateRangeSelector />
        </Provider>
      ),
      dateInput = DateComponent.find("input[type='text']");
    console.log(dateInput);
    dateInput.at(0).simulate('click');
    expect(DateComponent.find('.react-datepicker').first()).toHaveLength(1);
  });

  it('check the onChange callback', () => {
    const onChange = jest.fn(),
      props = {
        value: '20.01.2020',
        onChange,
      },
      DateInputComponent = mount(
        <Provider store={store}>
          <DateRangeSelector {...props} />
        </Provider>
      )
        .find('input')
        .first();
    DateInputComponent.simulate('change', {
      target: { value: moment('2020-01-22') },
    });
    expect(onChange).toHaveBeenCalledWith('01.22.2020');
  });
  it('check month and years dropdowns displayed', () => {
    const props = {
        showMonthDropdown: true,
        showYearDropdown: true,
      },
      DateInputComponent = mount(
        <Provider store={store}>
          <DateRangeSelector {...props} />
        </Provider>
      )
        .find("input[type='text']")
        .at(0);
    DateInputComponent.at(0).simulate('click');
    expect(
      DateInputComponent.first().hasClass(
        'react-datepicker__month-dropdown-container'
      )
    ).toEqual(true);
  });
});
