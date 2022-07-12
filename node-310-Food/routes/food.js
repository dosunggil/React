import express from "express";
const router = express.Router();

import { food_model } from "../comfig/mongoConfig.js";

router.get("/selectAll", (req, res) => {
  food_model.find({}).then((result) => res.json(result));
});

// POST localhost:3000/food/insert
router.post("/insert", (req, res) => {
  console.log(req.body);
  food_model.create(req.body);
  res.json({ OK: "OK" });
});

/*
  REST Ful 방식의 delete RequestMethod 로 요청을 받고
  주소창에 전달된 값을 id params 변수에 받아 확인하기
*/
router.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  food_model.findOneAndDelete({ d_id: id }).exec().then(res.send("OK"));
});

export default router;

/*
  REST Full 방식의 요청
  router, Controller 에서 사용하는 ReqquestMethod 
  get : 데이터를 요청할때
  post : 데이터를 추가할때
  delete : 데이터를 삭제할때
  put : 데이터를 업데이트 할 때
*/
