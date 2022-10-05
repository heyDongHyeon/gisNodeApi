
const CorsInit = require('./service/module/cors/cors.js');

const LayerRoute = require('./service/route/layer.js');
const DbconnRoute = require('./service/route/dbconn.js');
const express = require('express');
// 끝

const app = express();

//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

CorsInit(app);

const port = app.listen(process.env.PORT || 5050);

//각 REST 에 대한 정의는 /service/route/*.js 에서 정의
app.use("/layer", LayerRoute);
app.use("/dbconn", DbconnRoute);

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
app.listen(port, () => {
    console.log('서버 시작.');
});


app.get('/pet',function(req, res){
    res.send('팻용폼 쇼핑을 할 수 있는 사이트입니다ssee')
});