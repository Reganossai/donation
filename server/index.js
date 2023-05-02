const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Holahmola!1",
  database: "flighttest",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  const { firstname, lastname, email, password, address, city, state } =
    req.body;
  const sqlInsert =
    "INSERT INTO flighttest_db (firstname,lastname,email,password,address,city,state) VALUES (?,?,?,?,?,?,?) ";
  db.query(
    sqlInsert,
    [firstname, lastname, email, password, address, city, state],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sqlSelect =
    "SELECT * FROM flighttest_db WHERE email = ? AND password = ?";
  db.query(sqlSelect, [email, password], (err, result) => {
    if (err) {
      res.send({ err : err });
    }
    if (result.length>0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
