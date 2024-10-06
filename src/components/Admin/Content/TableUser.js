import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import axios from "axios";

const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListUsers();
  }, []); // Hàm này được chạy sau khi hàm return được chạy, [] ám chỉ rằng hàm chỉ chạy duy nhất một lần

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
      // Khi cập nhật state thì giao diện sẽ render lại
    }
  };

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
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
                  <th scope="row">{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-secondary mx-3">View</button>
                    <button className="btn btn-warning mx-3">Update</button>
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
