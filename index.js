const express = require('express'); // import 개념, express 모듈을 가져온다
const app = express(); // express 모듈 사용하여 app 만든다
const port = 3000; // 포트지정

// json 사용
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// express 서버랑 mongodb 연결 >> mongoose 드라이버 사용
const mongoose = require('mongoose');
const url = 'mongodb://root:1234@localhost:27017';
mongoose.set('strictQuery', true);
mongoose.connect(url)
    .then(() => console.log('mongodb에 연결되었습니다.')) // 정상처리
    .catch((err) => console.log(err)); // 에러처리

// 앱이 실행될 때 기본 주소, 가장 상위에 접속
app.get('/', (req, res) => {
    res.send('어서오쇼~! 노드서버에요~!');
});

// api 모듈 호출
const userRouter = require("./routes/users"); // 해당 주소의 라우터(user 라우터) 가져온다
app.use("/users", userRouter);

const postRouter = require("./routes/posts");
app.use("/posts", postRouter);

// app 대기모드
app.listen(port, () => {
    console.log("서버 동작중...");
});