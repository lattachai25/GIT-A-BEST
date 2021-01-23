import React from "react";

function Listorderall() {
  return (
    <div>
      <div
        className="alert alert-primary"
        style={{ position: "revert", marginTop: "100px" }}
      >
        List Order All
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Supplier</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit price</th>
            <th scope="col">Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>มะเขือม่วงก้านดำโครงการหลวง</td>
            <td>คุณดารุณี ปรีชา</td>
            <td>100 กก</td>
            <td>10,000</td>
            <td>2101400021</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>แอสพารากัสโครงการหลวง</td>
            <td>คุณดารุณี ปรีชา</td>
            <td>10 กก</td>
            <td>1,400</td>
            <td>2101400022</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>กระเฉดเด็ด</td>
            <td>คุณดารุณี ปรีชา</td>
            <td>10 กก</td>
            <td>3,200</td>
            <td>2101400021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Listorderall;
