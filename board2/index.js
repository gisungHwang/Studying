const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 3000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "board",
});

app.get("/list", (req, res) => {
  const sqlQuery =
    "SELECT BOARD_ID, BOARD_TITLE, REGISTER_ID, DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d') AS REGISTER_DATE FROM board;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
