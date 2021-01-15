const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//   user: "admin_nut",
//   host: "http://206.189.80.229",
//   password: "028158702N",
//   database: "admin_default",
// });
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "admin_default",
});
// const db = mysql.createConnection({
//   user: "admin_nut",
//   host: "http://206.189.80.229",
//   password: "028158702N",
//   database: "admin_default",
// });



app.get("/vegetable/list", (req, res) => {
  db.query(
    "SELECT vegetable.*, sku_code.*, sub.* FROM (((vegetable INNER JOIN sku_code ON vegetable.sku_code_id = sku_code.sku_code_id) INNER JOIN sub ON vegetable.sub_id = sub.sub_id))",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/sub/list", (req, res) => {
  db.query(
    "SELECT sub.*, type.* FROM ((sub INNER JOIN type ON sub.type_id = type.type_id) )",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/user/list", (req, res) => {
  db.query(
    "SELECT user.*, protion.*, status.*, branch.* FROM (((user INNER JOIN protion ON user.protion_id = protion.protion_id) INNER JOIN status ON user.status_id = status.status_id) INNER JOIN branch ON user.branch_id = branch.branch_id)",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/branch/list", (req, res) => {
  db.query("SELECT * FROM branch", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/type/list", (req, res) => {
  db.query("SELECT * FROM type", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/user/create", (req, res) => {
  const protion_id = req.body.protion_id;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const firstname = req.body.firstname;
  const landname = req.body.landname;
  const status_id = req.body.status_id;
  const branch_id = req.body.branch_id;

  db.query(
    "INSERT INTO user (protion_id, username, password, email, firstname, landname, status_id, branch_id) VALUES(?,?,?,?,?,?,?,?)",
    [
      protion_id,
      username,
      password,
      email,
      firstname,
      landname,
      status_id,
      branch_id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Inserte UserName And PassWord ComPlete!!");
      }
    }
  );
});

app.post("/sub/create", (req, res) => {
  const sub_number = req.body.sub_number;
  const sub_name = req.body.sub_name;
  const sub_phone = req.body.sub_phone;
  const sub_contact_name = req.body.sub_contact_name;
  const sub_address = req.body.sub_address;
  const type_id = req.body.type_id;

  db.query(
    "INSERT INTO sub (sub_number, sub_name, sub_phone, sub_contact_name, sub_address, type_id) VALUES(?,?,?,?,?,?)",
    [sub_number, sub_name, sub_phone, sub_contact_name, sub_address, type_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Inserte Sub ComPlete!!");
      }
    }
  );
});

app.listen("3001", () => {
  console.log("Server Is Running on Compass! 3001");
});
