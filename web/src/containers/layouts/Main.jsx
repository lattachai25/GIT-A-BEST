import React from "react";
import Nav from "../../components/Common/Header/menu_left.js";
import Menu_bar from "../../components/Common/Header/menu_ber.js";

export default ({ children }) => {
  console.log("render Main");

  return (
    <>
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <Nav />
          </div>

          <div className="col-9">
            <Menu_bar />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
