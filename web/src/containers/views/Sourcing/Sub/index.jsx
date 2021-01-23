import React from "react";

export default () => (
  <form>
    <div class="alert alert-primary" role="alert">
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
);
