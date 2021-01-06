const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "pos_dev",
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

app.listen("3001", () => {
  console.log("Server Is Running on Compass! 3001");
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
