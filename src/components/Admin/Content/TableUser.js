import { useState } from "react";
import axios from "axios";

const TableUser = (props) => {
  const { listUsers } = props;

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <tr key={`table-users-${user.id}`}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-secondary mx-3">View</button>
                    <button
                      onClick={() => props.handleClickBtnUpdate(user)}
                      className="btn btn-warning mx-3"
                    >
                      Update
                    </button>
                    <button className="btn btn-danger mx-3">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && <tr>Not found data</tr>}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
