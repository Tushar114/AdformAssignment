import React, { useState, useEffect } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { dateFilter } from './actions';
import { fetchUser } from './middleware/Middleware';
import Loader from './components/Loader/Loader';
import Camptable from './components/Camptable';
import { SelectUserData, SelectIsLoading } from './selector';

const jsondata = require('./data.json');

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isDateChanged, setIsDateChanged] = useState(false);
  const isLoading = useSelector((state) => SelectIsLoading(state));
  const userData = useSelector((state) => SelectUserData(state));
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
  const handleStartChange = (date) => {
    setStartDate(date);
  };
  const handleEndChange = (date) => {
    setEndDate(date);
    if (date === null) {
      setIsDateChanged(false);
    } else {
      setIsDateChanged(true);
    }
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className="mt-4">
            <div className="flex-container">
              <DatePicker
                placeholderText="Start Date"
                selected={startDate}
                showMonthDropdown
                showYearDropdown
                onChange={handleStartChange}
              />
              <DatePicker
                placeholderText="End Date"
                selected={endDate}
                showMonthDropdown
                showYearDropdown
                onChange={handleEndChange}
              />
              <div className="search-right">
                <input
                  type="text"
                  value={searchText}
                  placeholder="Search by name"
                  onChange={handleSearch}
                ></input>
              </div>
            </div>
            <div className="mt-4">
              {userData && (
                <Camptable
                  userData={userData}
                  searchText={searchText}
                  startDate={startDate}
                  endDate={endDate}
                  isDateChanged={isDateChanged}
                />
              )}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
