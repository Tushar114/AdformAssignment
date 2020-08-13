import React from 'react';
import UserList from './UserList.jsx';
import { useSelector } from 'react-redux';
import { getCampUsers } from '../../redux/selector/selector';

const Camptable = ({ searchText }) => {
  let userArr = useSelector((state) => getCampUsers(state));

  if (searchText) {
    userArr = [
      ...userArr.filter((user) => {
        return user.campName.includes(searchText);
      }),
    ];
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Active</th>
            <th scope="col">Budget</th>
          </tr>
        </thead>

        {userArr.map((user, i) => {
          return <UserList key={user.id} {...user} />;
        })}
      </table>
    </div>
  );
};

export default Camptable;
