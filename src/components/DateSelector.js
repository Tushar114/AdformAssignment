import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { fetchUser } from '../middleware/Middleware';
import { dateFilter } from '../actions';
const jsondata = require('../data.json');

function DateSelector({ setIsDateChanged }) {
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
      setIsDateChanged(false);
    } else {
      setIsDateChanged(true);
    }
  };
  return (
    <>
      <DatePicker
        placeholderText="Start Date"
        selected={startDate}
        showMonthDropdown
        showYearDropdown
        onChange={handleStartDateChange}
      />
      <DatePicker
        placeholderText="End Date"
        selected={endDate}
        showMonthDropdown
        showYearDropdown
        onChange={handleEndDateChange}
      />
    </>
  );
}

export default DateSelector;
