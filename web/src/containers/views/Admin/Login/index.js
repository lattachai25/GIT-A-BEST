import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {

      if(response.data.message) {
        setLoginStatus(response.data.message)
      }else{
         setLoginStatus(window.location.href = "/Register")
      }
// 
      // console.log(response);
    });
  };

  const mystyle = {
    top: 150,
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
  };
    const fonta3 = {
    textAlign: "center",
    color: "red",
    fontFamily: "Arial",
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div
              className="card shadow-lg border-10 rounded-lg mt-0"
              style={mystyle}
            >
              <div className="card-header">
                <center>
                  <img src={process.env.PUBLIC_URL + "/img/logo.png"} />
                </center>
              </div>
              <div className="card-body">
                  <div className="form-group">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      UserName
                    </label>
                    <input
                      className="form-control py-4"
                      type="text"
                      placeholder="UserName"
                       onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="small mb-1" htmlFor="inputPassword">
                      Password
                    </label>
                    <input
                      className="form-control py-4"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => {
                      setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-center form-group d-flex align-items-center justify-content-between col-12">
                    <button onClick={login} className="btn btn-primary text-center">
                      Login
                    </button>
                  </div>
                    <div style={fonta3}>{loginStatus}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default Login;
