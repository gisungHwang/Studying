const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');  //요청정보를 처리하기 위해 사용
const cors = require('cors');              

const app = express();
const PORT = process.env.port || 8008;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


let corsOptions = {
    origin: "*",     //출저 허용 옵션
    Credential: true,  // 사용자 인증이 필요한 리소스(쿠키 등) 접근
};

app.use(cors(corsOptions));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "bbs",
});

app.listen(PORT, ()=> {
    console.log(`running on port ${PORT}`);
});

app.get("/list", (req, res) => { // req는 요청정보 res는 응답정보
    console.log("list!!!");
    const sqlQuery = 
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTNET, DATE_FORMAT(BOARD_DATE, '%Y0-%m-%d') AS BOARD DATE FROM BOARD TBL;";
    db.query(sqlQuery, (err, result) => {
        res.send(result); //여기서의 결과는 app.js의 .then에 있는 res로 전달받는다.
    });
});

app.post("/insert", (req, res) => {
    console.log("/insert", req.body);
    var writer = req.body.writer;
    var title = req.body.title;
    var content = req.body.content;

    const sqlQuery = 
    "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT) values (?,?,?);";
    db.query(sqlQuery, [writer, title, content], (err, result) => {   // ?에 들어갈 형태를 배열 형태로 나열
        res.send(result);
    });
});



