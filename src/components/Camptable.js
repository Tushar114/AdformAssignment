import React from 'react';
import UserList from './UserList';
const CampData = require('../data.json');

const Camptable = ({ userData, searchText, isDateChanged }) => {
  let userArr = [];

  if (!isDateChanged) {
    for (let i = 0; i < userData.length; i++) {
      for (let j = 0; j < CampData.data.length; j++) {
        if (CampData.data[j].userId === userData[i].id) {
          userArr.push(CampData.data[j]);
        }
      }
    }
  } else {
    userArr = [...userData];
  }

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
