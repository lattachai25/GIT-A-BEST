import React from "react";
// import Nav from "../../components/Common/Header/index";

export default ({ children }) => {
  console.log("render Main Admin");

  return (
    <>
      <div className="col-12">{children}</div>
    </>
  );
};
