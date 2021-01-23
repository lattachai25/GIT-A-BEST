import Axios from "axios";
import React, { useState } from "react";

function Createsub() {
  const [typeList, setTypeList] = useState([]);

  const getType = () => {
    Axios.get("http://localhost:3001/type/list").then((response) => {
      setTypeList(response.data);
    });
  };

  return (
    <div>
      <form action="">
        <div
          className="alert alert-primary"
          style={{ position: "revert", marginTop: "100px" }}
        >
          Form Input Supplier
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Sub Number</label>
            <input
              type="text"
              className="form-control"
              id="sub_number"
              placeholder="Sub Number"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Name & Company</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="Name & Company"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Phone"
              required
            />
            <div className="col-md-3 mb-3"></div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Type Product</label>
              <select class="form-control" name="type_id" onClick={getType()}>
                {typeList.map((val, key) => {
                  return (
                    <option value={val.type_id} key={key.type_id}>
                      {val.type_name}
                    </option>
                  );
                })}
                ;
              </select>
            </div>
          </div>
          <div className="col-md-12 mb-12">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <button className="btn btn-primary float-right" type="submit">
          SAVE
        </button>
      </form>
    </div>
  );
}
export default Createsub;
