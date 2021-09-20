// 1. app 만들기
// 2. app 관련 기본 setting
// 3. 공통 미들 웨어
// 4. router : wildcard 와 같은 넓은 범위는 아래쪽으로
// 5. error middleware
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

dotenv.config();
const app = express();

console.log(process.env.TEST);
app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
  console.log('모든 요청에 실행하고 싶어요');
  next();
});

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('에러가 났어요');
});

app.listen(3000, () => {
  console.log('익스프레스 서버 실행');
});
