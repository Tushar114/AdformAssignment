import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { fetchUser } from '../../redux/thunks/Middleware';
import { dateFilter, dateChanged } from '../../redux/actions';
const jsondata = require('../../data.json');

function DateRangeSelector(props) {
  const { showMonthDropdown, showYearDropdown } = props;
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [startDate === null]);

  useEffect(() => {
    dispatch(
      dateFilter({
        startDate: startDate,
        endDate: endDate,
        jsondata,
      })
    );
  }, [endDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    if (date === null) {
      dispatch(dateChanged(false));
      //setIsDateChanged(false);
    } else {
      dispatch(dateChanged(true));
      //setIsDateChanged(true);
    }
  };
  return (
    <>
      <DatePicker
        placeholderText="Start Date"
        selected={startDate}
        showMonthDropdown={showMonthDropdown}
        showYearDropdown={showYearDropdown}
        onChange={handleStartDateChange}
      />
      <DatePicker
        placeholderText="End Date"
        selected={endDate}
        showMonthDropdown={showMonthDropdown}
        showYearDropdown={showYearDropdown}
        onChange={handleEndDateChange}
      />
    </>
  );
}
const defaultProps = {
  showMonthDropdown: true,
  showYearDropdown: true,
};

DateRangeSelector.defaultProps = defaultProps;

export default DateRangeSelector;
