import React from "react";

function index() {
  return (
    <div>
      <form action="">
        <div
          className="alert alert-primary"
          style={{ position: "revert", marginTop: "100px" }}
        >
          Form Create Item Code
        </div>
        <div className="form-row">
          <div class="form-group col-md-6 mb-6">
            <label for="exampleFormControlSelect1">Select Group</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option value="1">ผัก</option>
              <option value="2">ผลไม้</option>
              <option value="3">ดอกไม้</option>
              <option value="4">เนื้อสัตว์</option>
              <option value="5">Grocery</option>
              <option value="30">บรรจุภัณฑ์</option>
              <option value="20">สินค้าแปรรูป</option>
              <option value="21">สูญเสียจากการผลิต</option>
              <option value="90">อืนๆ</option>
              <option value="100">ปลูกผัก</option>
              <option value="101">ปลูกกล้วย</option>
              <option value="40">วัสดุสิ้นเปลืองในการผลิต</option>
              <option value="6">ค่าใช้จ่ายเบ็ดเตล็ด</option>
            </select>
          </div>

          <div className="col-md-6 mb-6">
            <label htmlFor="validationDefault01">Item Code</label>
            <input
              type="text"
              className="form-control"
              id="sub_number"
              name="item_number"
              value=""
            />
          </div>
        </div>
        <button className="btn btn-primary float-right" type="submit">
          SAVE
        </button>
      </form>
    </div>
  );
}

export default index;
