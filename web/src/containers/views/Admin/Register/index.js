import React, { useState } from "react";
import Axios from "axios";

function Index() {
  const [protion_id, setProtion_id] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [landname, setLandname] = useState("");
  const [status_id, setStatus_id] = useState("");
  const [branch_id, setBranch_id] = useState("");

  const [registerStatus, setRegisterStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/user/create", {
      protion_id: protion_id,
      username: username,
      password: password,
      email: email,
      firstname: firstname,
      landname: landname,
      status_id: status_id,
      branch_id: branch_id,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus((window.location.href = "/"));
      }
    });
  };

  const fonta3 = {
    textAlign: "center",
    color: "red",
    fontFamily: "Arial",
  };
  return (
    <div>
      <div class="alert alert-primary" role="alert">
        From Register User
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">E-mail</label>
          <input
            name="email"
            type="text"
            className="form-control"
            placeholder=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Protion</label>
          <input
            name="protion_id"
            type="text"
            className="form-control"
            placeholder="protion_id"
            onChange={(e) => {
              setProtion_id(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">First Name</label>
          <input
            name="Firstname"
            type="text"
            className="form-control"
            placeholder=""
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">LandName</label>
          <input
            name="Landname"
            type="text"
            className="form-control"
            placeholder=""
            onChange={(e) => {
              setLandname(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputStatus">Status</label>
          <select
            name="status_id"
            className="form-control"
            onChange={(e) => {
              setStatus_id(e.target.value);
            }}
          >
            <option selected>เลือกสถาณะ </option>
            <option value="1">เปิด</option>
            <option value="2">ปิด</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputState">Branch</label>
          <select
            name="Branch_id"
            className="form-control"
            onChange={(e) => {
              setBranch_id(e.target.value);
            }}
          >
            <option selected>เลือกสาขา </option>
            <option value="1">สาขา 1</option>
            <option value="2">สาขา 2</option>
            <option value="3">สาขา 3</option>
            <option value="4">สาขา 4</option>
            <option value="5">สาขา 5</option>
            <option value="6">สาขา 6</option>
            <option value="7">สาขา 7</option>
            <option value="8">สาขา 8</option>
            <option value="9">สาขา 9</option>
            <option value="10">สาขา 10</option>
            <option value="11">สาขา 11</option>
            <option value="12">สาขา 12</option>
            <option value="13">สาขา 13</option>
            <option value="14">สาขา 14</option>
            <option value="15">สาขา 15</option>
            <option value="16">สาขา 16</option>
            <option value="17">สาขา 17</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <button onClick={register} className="btn btn-primary text-center">
          Submit
        </button>
      </div>
      <div style={fonta3}>{registerStatus}</div>
    </div>
  );
}

export default Index;
