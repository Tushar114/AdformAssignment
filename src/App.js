import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { fetch, dateFilter } from './actions';
import Loader from './components/Loader';
import Camptable from './components/Camptable';

class App extends Component {
  state = {
    startDate: '',
    endDate: '',
    searchText: '',
    isDateChanged: false,
  };

  componentDidMount() {
    this.props.fetch();
  }
  handleStartChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleEndChange = (date) => {
    this.setState(
      {
        endDate: date,
        isDateChanged: true,
      },
      () => {
        this.props.dateFilter(this.state.startDate, this.state.endDate);
      }
    );
  };
  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    return (
      <div className="container">
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <div className="mt-4">
              <DatePicker
                placeholderText="Start Date"
                selected={this.state.startDate}
                showMonthDropdown
                showYearDropdown
                onChange={this.handleStartChange}
              />
              <DatePicker
                placeholderText="End Date"
                selected={this.state.endDate}
                showMonthDropdown
                showYearDropdown
                onChange={this.handleEndChange}
              />
              <div className="search-right">
                <input
                  type="text"
                  value={this.state.searchText}
                  placeholder="Search by name"
                  onChange={this.handleSearch}
                ></input>
              </div>
              <div className="mt-4">
                {this.props.userData && (
                  <Camptable
                    userData={this.props.userData}
                    searchText={this.state.searchText}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    isDateChanged={this.state.isDateChanged}
                  />
                )}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.campaign.loading,
    userData: state.campaign.data,
  };
};
export default connect(mapStateToProps, { fetch, dateFilter })(App);
