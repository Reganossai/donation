const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Holahmola!1",
    database:"flighttest"
})


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req,res)=> {
    const sqlInsert = "INSERT INTO flighttest_db () VALUES "
})




app.listen(8080, ()=>{  
    console.log("server is running on port 8080");
})