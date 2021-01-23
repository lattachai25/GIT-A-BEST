import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Axios from "axios";

function Index() {
  const [data, setData] = useState({ users: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios("http://localhost:3001/user/list");

      setData({
        users: result.data,
      });
    };

    fetchData();
  }, [data]);

  const deleteUser = (user) => {
    Axios.delete(`http://localhost:3001/user/delete/${user}`);
  };

  return (
    <div>
      <a type="button" class="btn btn-success float-right" href="/register">
        Create User
      </a>
      <div>
        <br />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">username</th>
            <th scope="col">password</th>
            <th scope="col">protion</th>
            <th scope="col">firstname</th>
            <th scope="col">landname</th>
            <th scope="col">email</th>
            <th scope="col">branch</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => (
            <tr>
              <td key={user.user_id}>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.protion_name}</td>
              <td>{user.firstname}</td>
              <td>{user.landname}</td>
              <td>{user.email}</td>
              <td>{user.branch_name}</td>
              <td>{user.status_name}</td>

              <td>
                <button
                  onClick={() => {
                    deleteUser(user.user_id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  <ReactPaginate />;
}

export default Index;
