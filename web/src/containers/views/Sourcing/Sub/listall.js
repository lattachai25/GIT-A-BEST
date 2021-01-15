import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

function Listall() {
  const [data, setData] = useState({ users: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://www.nextcis.com:3001/sub/list");

      setData({
        users: result.data,
      });
    };

    fetchData();
  }, []);

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Contact Name</th>
          <th scope="col">Type</th>
          <th scope="col">Address</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.users.map((user) => (
          <tr>
            <th scope="row" key={user.id}>
              {user.sub_number}
            </th>
            <td>{user.sub_name}</td>
            <td>{user.sub_phone}</td>
            <td>{user.sub_contact_name}</td>
            <td>{user.type_name}</td>
            <td>{user.sub_address}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  <ReactPaginate />;
}

export default Listall;
