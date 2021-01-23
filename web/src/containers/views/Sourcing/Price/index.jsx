import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Index() {
  const [data, setData] = useState({ users: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios("http://localhost:3001/vegetable/list");

      setData({
        users: result.data,
      });
    };

    fetchData();
  }, []);

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">SKU Barcode</th>
            <th scope="col">PLU Code</th>
            <th scope="col">Name Products</th>
            <th scope="col">Prict</th>
            <th scope="col">Sub Name</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => (
            <tr>
              <th scope="row" key={user.vegetable_id}>
                {user.vegetable_id}
              </th>
              <td>{user.sku_code_name}</td>
              <td>{user.plu_code_id}</td>
              <td>{user.vegetable_name}</td>
              <td>{user.price_name}</td>
              <td>{user.sub_name}</td>
              <td>
                <input
                  type="test"
                  className="form-control"
                  width={10}
                  placeholder={user.price_name}
                  style={{ width: 150 }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
