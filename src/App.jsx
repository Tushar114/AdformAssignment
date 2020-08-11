import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './middleware/Middleware';
import Loader from './components/Loader/Loader.jsx';
import Camptable from './components/Camptable.jsx';
import { SelectUserData, SelectIsLoading } from './selector';
import DateSelector from './components/DateSelector';
import SearchCamp from './components/SearchCamp';

function App() {
  const [searchText, setSearchText] = useState('');
  const [isDateChanged, setIsDateChanged] = useState(false);
  const isLoading = useSelector((state) => SelectIsLoading(state));
  const userData = useSelector((state) => SelectUserData(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

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
              <DateSelector setIsDateChanged={setIsDateChanged} />
              <SearchCamp
                handleSearch={(e) => handleSearch(e)}
                searchText={searchText}
              />
            </div>
            <div className="mt-4">
              {userData && (
                <Camptable
                  searchText={searchText}
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
