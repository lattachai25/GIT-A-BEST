import React from "react";
import Nav from "../../components/Common/Header/index";
import Menu_bar from "../../components/Common/Header/menu_ber";

export default ({ children }) => {
  console.log("render Main");

  return (
    <>
      <div className="col-12">
        <div className="row">
          <div className="col-2">
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
