import { useState, useEffect } from "react";
import FoodList from "./FoodList";
import moment from "moment";

const FoodInput = () => {
  const [foodList, setFoodList] = useState([]);
  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonFood = await response.json();
    setFoodList(jsonFood);
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  const onKeyDown = () => {
    const f_name = document.querySelector("input.input-name");
    const f_num = document.querySelector("input.input-num");
    const f_kcal = document.querySelector("input.input-kcal");
    console.log(f_name.value);
    const food = {
      f_name: f_name.value,
      f_num: f_num.value,
      f_kcal: f_kcal.value,
      f_date: moment().format("YYYY[-]MM[-]DD"),
    };

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    };
    fetch("http://localhost:3000/food", postData)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") fetchFoodList();
      });
  };
  return (
    <>
      <div className="container">
        <input placeholder="식품 이름" className="input-name" />
        <input placeholder="섭취량" className="input-num" />
        <input placeholder="칼로리" className="input-kcal" />
        <div onClick={onKeyDown}>등록하기</div>
      </div>

      <FoodList foodList={foodList} />
    </>
  );
};

export default FoodInput;
