import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../containers/layouts/Main";
import MainAdmin from "../containers/layouts/MainAdmin";

// views
import About from "../containers/views/Main/About/index.jsx";
import Home from "../containers/views/Main/Home/index.jsx";

import Epacking from "../containers/views/Epacking/index1.jsx";
import Etransport from "../containers/views/Epacking/index2.jsx";
import Executive from "../containers/views/Epacking/index3.jsx";

//Sourcing

import Listall from "../containers/views/Sourcing/Sub/listall.js";
import Sub from "../containers/views/Sourcing/Sub/createsub.js";
import Barcode from "../containers/views/Sourcing/Barcode/index.jsx";
import Itemcode from "../containers/views/Sourcing/Item_code/index.jsx";
import Price from "../containers/views/Sourcing/Price/index.jsx";
import Report_sourcing from "../containers/views/Sourcing/Report_sourcing/index.jsx";
import Listorderall from "../containers/views/Sourcing/List_Order_All/Listorderall.js";

// admin Sourcing Views
import Sour_Admin from "../containers/views/Sourcing/Admin/index";
import Po from "../containers/views/Sourcing/Admin/PO/index";
import Create_po from "../containers/views/Sourcing/Admin/PO/create_po";
import Total_item from "../containers/views/Sourcing/Admin/total_Item/index";

// Administrator
import Dashboard from "../containers/views/Administrator/Dashboard/index.js";
import Setting from "../containers/views/Administrator/Setting/index.js";

import Login from "../containers/views/Administrator/Login/index.js";
import Register from "../containers/views/Administrator/Register/index.js";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />

        {/* <Route >
          <MainAdmin>
            <Switch>
              
            </Switch>
          </MainAdmin>
        </Route> */}

        <Route>
          <Main>
            <Switch>
              {/* ----------------------------------- Admin -------------------------------------------- */}
              <Route path="/Dashboard" exact component={Dashboard} />
              <Route path="/Setting" component={Setting} />
              <Route path="/Register" component={Register} />
              {/* ----------------------------------- Sourcing -------------------------------------------- */}
              <Route path="/Home" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Epacking" component={Epacking} />
              <Route path="/Etransport" component={Etransport} />
              <Route path="/Executive" component={Executive} />
              {/* ----------------------------------- Sourcing -------------------------------------------- */}
              <Route path="/Listall" component={Listall} />
              <Route path="/Sub" component={Sub} />
              <Route path="/Barcode" component={Barcode} />
              <Route path="/Itemcode" component={Itemcode} />
              <Route path="/Price" component={Price} />
              <Route path="/Report_sourcing" component={Report_sourcing} />

              <Route path="/Listorderall" component={Listorderall} />
              <Route path="/Sour_Admin" component={Sour_Admin} />
              <Route path="/Total_item" component={Total_item} />
              <Route path="/Po" component={Po} />
              <Route path="/Create_po" component={Create_po} />
              {/* ----------------------------------- Sourcing -------------------------------------------- */}
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};
