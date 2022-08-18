const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.port || 8008;
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456", 
  database: "project",
});

app.post("/login", (req, res) =>{
  console.log("/login", req.body);
  var id = req.body.id;
  var password = req.body.password;

const sqlQuery = "select count(*) as 'cnt' from member where id=? and password=?;";
db.query(sqlQuery, [id, password], (err, result) => {
  res.send(result);
});
});
//   if(result[0].cnt ===1) {
//     res.send({message: "success"}); //send or send로 보내도 가능
//   } else {
//     res.send({message: "fail"});
//   }
//   });
// });

app.post("/member", (req, res) => {
  console.log("/member", req.body);
  var id = req.body.id;
  var password = req.body.password;
  var passwordcheck = req.body.passwordcheck;
  var name = req.body.name;
  var email1 = req.body.email1;
  var email2 = req.body.email2;
  var address = req.body.address;
  var phone1 = req.body.phone1;
  var phone2 = req.body.phone2;
  var phone3 = req.body.phone3;
  
  
  const sqlQuery = "insert into member values (?,?,?,?,?,?,?,?,?,?);";
  db.query(sqlQuery, [id, password, passwordcheck, name, email1, email2, address, phone1, phone2, phone3], (err, result) => {
    res.send(result);
  });
});

app.post("/list", (req, res) => { //페이지넘버와 페이지사이즈를 전달받아옴
  console.log("list!!!");
  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);
  console.log("list!!(page_numm page_size, article_count)", page_num, ", ", page_size);

  const start_limit = (page_num - 1) * page_size; //페이지넘이 1일 때는 0 , 2일때는 3 
  console.log("list!!!(start_limit, page_size)", start_limit, ", ", page_size);

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL ORDER BY board_num desc limit ?,?;";
  db.query(sqlQuery, [start_limit, page_size], (err, result) => {
    res.send(result);
  });
});
app.get("/count", (req, res) => {
  console.log("count!!!");
  const sqlQuery = "SELECT count(*) AS COUNT FROM BOARD_TBL;"
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});



app.post("/insert", (req, res) => {  //이미지 수정
  console.log("/insert", req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT) values (?,?,?,?);";  //이미지 수정
  db.query(sqlQuery, [writer, title, content, req.file.filename], (err, result) => {
    res.send(result);
  });
});

app.post("/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE, FROM BOARD_TBL where BOARD_NUM = ?;"; //이미지수정
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var content = req.body.article.board_content;
  var num = req.body.article.board_num;

  const sqlQuery =
    "update BOARD_TBL set BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=now() where board_num=?;";
  db.query(sqlQuery, [title, content, num], (err, result) => {
    res.send(result);
    console.log("result=", result);
  });
});

app.post("/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(id) => ", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.listen(PORT, () => { //출력
  console.log(`running on port ${PORT}`);
});
