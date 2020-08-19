import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './redux/thunks/Middleware';
import Loader from './components/Loader/Loader.jsx';
import Camptable from './components/CampaignList/Camptable.jsx';
import {
  SelectUserData,
  SelectIsLoading,
  SelectError,
} from './redux/selector/selector';
import DateRangeSelector from './components/DateRangeSelector/DateRangeSelector.jsx';
import SearchControl from './components/SearchControl/SearchControl.jsx';
import Error from './components/Error/Error';

function App() {
  const [searchText, setSearchText] = useState('');
  const isLoading = useSelector((state) => SelectIsLoading(state));
  const userData = useSelector((state) => SelectUserData(state));
  const error = useSelector((state) => SelectError(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

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
            {error ? (
              <Error />
            ) : (
              <>
                <div className="flex-container">
                  <DateRangeSelector />
                  <SearchControl
                    handleSearch={(e) => handleSearch(e)}
                    searchText={searchText}
                  />
                </div>
                <div className="mt-4">
                  {userData && <Camptable searchText={searchText} />}
                </div>
              </>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
