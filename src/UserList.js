import React from 'react';

const UserList = ({ no, name, startDate, endDate, Budget }) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{`Campaign ${no}`}</th>
        <td>{name ? name : 'Unknown User'}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td>
          {new Date(endDate) > new Date() ? (
            <>
              <i
                className="fa fa-circle"
                aria-hidden="true"
                style={{ color: 'green' }}
              ></i>
              <span> Active</span>
            </>
          ) : (
            <>
              <i
                className="fa fa-circle"
                aria-hidden="true"
                style={{ color: 'red' }}
              ></i>
              <span> Inactive</span>
            </>
          )}
        </td>

        <td>{Budget}</td>
      </tr>
    </tbody>
  );
};

export default UserList;
