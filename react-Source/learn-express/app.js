const express = require('express'); //express를 통해 라이브러리를 불러오는 과정
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

const MySQLStore = require("express-mysql-session")(session); //sql라이브러리를 연결

//npm i exrpess-mysql-session  mysql과 연동
dotenv.config();
const app = express();  //서버 객체 만드는 작업
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
app.set('port', process.env.PORT || 3000); // 3000포트로 기본값 설정// 이 위에는 항상 고정되게 사용

const options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'bbs',
};

var sessionStore = new MySQLStore(options);

const multer = require('multer');
const fs = require('fs');

try {
    fs.readdirSync('uploads'); //uploads의 디렉터리를 모두 읽어오라는 뜻
} catch (error) { // uploads폴더가 없으면 catch블락으로 밑의 명령어 수행
    console.log('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads'); //uploads디렉터리 생성
}

const upload = multer({
    storage: multer.diskStorage({ //storage는 저장할 위치와 파일의 경로를 지정해주는 함수
        destination(req, file, done) {  //목적지를 다루는 함수 //done는 파일의 경로를 나타내주는 함수
            done(null, 'uploads'); //실제 파일을 업로드할 경로를 지정
        },
        filename(req, file, done) { //파일을 다루는 함수
            const ext = path.extname(file.originalname); //extname는 확장자 구하는 함수 // 파일의 확장자를 ext에 선언
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); //basename는 파일이름 // 확장자를 바꿔버림
        },
    }),
    limits: { fileSize: 10 * 1024 * 1024 },  //첨부된 파일의 사이즈를 설정
});

app.get("/upload", (req, res) => {    //get방식
    res.sendFile(path.join(__dirname, "multipart.html"));
});

// app.post('/upload', upload.array('many'), (req, res) => { //post방식 // upload.single('image')>>실제 파일을 업로드하는 과정, 여기서 image는 multipart.html에서의 파일이름
//     console.log(req.files, req.body);  //사진여러개 보내려면 upload.single를 upload.array로 변경하고 html에 multiple/ 적용하고 file에 s붙여주기
//     res.send('ok');
// });

app.post('upload',
    upload.fields([{ name: 'image1' }, {
        name: 'image2'

    }]),
    (req, res) => {
        console.log(req.files, req.body);
        res.send('ok');
    },
);

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});


// app.use(morgan('dev'));
// app.use('/', express.static(path.join(__dirname, 'public'))); //dirname은 현재 위치 경로를 나타냄
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));  //urlencoded사용하면 객체형식으로 사용 가능 // extended: false는 Node.js가 기본적으로 제공하는 쿼리를 사용 가능
// app.use(cookieParser(process.env.COOKIE_SECRET)); //cookie는 클라이언트 쪽에서 유지관리되기 때문에 보안에 취약
// app.use(session({  //session은  서버와 클라이언트간의 유지보수,연결상태 유지 //session은 서버쪽에서 유지관리
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     store: sessionStore, // 19번 문장에서 선언한 것을 여기에 저장
//     cookie: {
//         httpOnly: true,
//         secure: false,
//     },
//     name: 'session_cookie', //세션쿠키명 설정.//설정하지않으면 디폴트값은 conect.sid로 설정
// }));

// app.use((req, res, next) => {
//     console.log('모든 요청에 다 실행됩니다.');
//     sess = req.session;
//     sess.username="hwang"
//     console.log("req.session.username => ", req.session.username); 
//     console.log("req.sessionID => ", req.sessionID); //세션객체아이디
//     console.log("req.session =>", req.session); //세션객체내용
//     next();
// });

// app.get('/', (req, res, next) => {
//     console.log('GET/ 요청에서만 실행됩니다.');
//     next();
// }, (req, res) => {
//     throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
// });

// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send(err.message); //정상적으로 처리되면 200, 오류나면 500
// });


// app.get('/search', (req, res)=> { //app.get(주소, 라우터) , '/'는 url 다음에 /가 온다는 뜻,
//     // console.log(req.query);  
//     // const var1 = req.query.var1;  //post방식이면 query대신에 body집어 넣어주면 됨
//     // const var2 = req.query.var2;

//     // res.send({data1:var1, data2:var2}); //req는 request, res는 respone을 뜻
//     res.sendFile(path.join(__dirname, '/index.html'));  //__(밑줄 두개)는 특수한 이름 사용할 때 사용, 해당 파일의 내용 보여줌
// });

app.listen(app.get('port'), () => {  // 서버쪽에서 요청이 들어오는지 감시하는 역할 // 어떤내용 실행할지 출력하는 역할
    console.log(app.get('port'), '번 포트에서 대기중'); //그 요청을 수락해서 해당 요청
});
