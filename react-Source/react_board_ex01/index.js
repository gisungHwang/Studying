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

app.get("/list", (req, res) => { //req에는 요청정보, res에는 응답정도가 들어있다 //url뒤에 /list하면 명령어들 수행
    console.log("list!!!");
    const sqlQuery = 
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTNET, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD DATE FROM BOARD TBL;"; //sql구문
    db.query(sqlQuery, (err, result) => { //
        res.send(result);
    });
});
