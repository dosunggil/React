const USERNAME = "dosunggil";
const PASSWORD = "12341234";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.izclczn.mongodb.net/?retryWrites=true&w=majority`;
/*
    mongoose 도구를 사용하여
    NoSQL 인 mongoDB 에 DBMS Schema 방식으로 접근하기
*/
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  f_id: String,
  f_date: String,
  f_name: String,
  f_num: Number,
  f_kcal: Number,
  f_full_kcal: Number,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
