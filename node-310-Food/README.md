# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- MongoDB + Express + React + NodeJS 연동 프로젝트

## NodeJS backend Project 를 생성하기 위하여

- 프로젝트 생성 : express-21c node-310-Food
- 프로젝트 폴더에서 : npm install

## React Frontend Project 를 생성하기 위하여

- 프로젝트 폴더에서 : create-react-app client
- client 폴더에서 터미널 열기 : yarn
- build 생성하기 : yarn build

## nodeJS 에서 client 인식시키기

- nodejs-310-Food/app.js 파일 열기
- public 을 client/build 로 변경

```
app.use(express.static(path.join("./client/build")));
```

- 바로 아래줄의
  `app.use("/", indexRouter);` : 삭제하기

* nodejs-310-Food 폴더에서 서버 시작 : nodemon

## React 프로젝트 파일 이름 변경

- App._ 으로 시작하는 파일을 모두 ReactJS._ 로 변경

## MongoDB 연동하기

- mongoose dependency 설치 : npm install mongoose
- 날짜 : npm install moment

* client 폴더에서 : yarn add moment / yarn add react-uuid
