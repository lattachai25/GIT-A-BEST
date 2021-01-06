import React, { Component } from "react";

const Login = () => {
  const mystyle = {
    top: 150,
    color: "white",
    padding: "10px",
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
                <form>
                  <div className="form-group">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      UserName
                    </label>
                    <input
                      className="form-control py-4"
                      id="inputUserNameAddress"
                      type="text"
                      placeholder="UserName"
                    />
                  </div>
                  <div className="form-group">
                    <label className="small mb-1" htmlFor="inputPassword">
                      Password
                    </label>
                    <input
                      className="form-control py-4"
                      id="inputPassword"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="rememberPasswordCheck"
                        type="checkbox"
                      />
                      {/* <label
                        className="custom-control-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember password
                      </label> */}
                    </div>
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                    {/* <a className="small" href="password.html">
                      Forgot Password?
                    </a> */}

                    <a className="btn btn-primary" href="/Register">
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
