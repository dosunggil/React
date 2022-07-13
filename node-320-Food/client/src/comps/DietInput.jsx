// state 변수를 만들기 위하여 useState 함수 import
import { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";

const DietInput = (params) => {
  //
  const { fetchFood, setFoods } = params;
  // JSON type 의 food state 생성
  const [food, setFood] = useState({
    d_id: uuid(),
    d_date: moment().format("YYYY[-]MM[-]DD"),
    d_food: "",
    d_qty: "",
    d_cal: "",
  });

  const onChange = (e) => {
    /*
      input box 에서 내용 입력(onChange)이벤트가 발생하면
      input box 가 e.target 에 담겨 전달된다.
      input box 의 name 속성과 value 을 분해하여
      각각 변수에 담기
      name 변수와 value 변수가 분해되고 각각의 별도 변수로 생성된다.
      각각 별도 변수로 선언된 속성을 사용하여 food JSON 객체에 값을 담는다.
    */
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };
  // const onDateChange = (e) => {
  //   setFood({ ...food, d_date: e.target.value });
  // };
  // const onFoodChange = (e) => {
  //   setFood({ ...food, d_food: e.target.value });
  // };

  const onClick = async (e) => {
    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    };
    /*
      react 와 node 사이에서 데이터를 주고받는데
      서로 다른 PORT 통해서 데이터를 주고 받게 되어
      CORS(Cross Origin Resource Share, 교차 사이트 스크립트 오류) 가 발생한다.
      서버와 서버간의 통신(데이터 교환) 이 이루어 질때
      보안, 해킹 방지 등을 이유로 점점 많은곳에서 스크립트 교환이 이루어지지 않도록 하고있다.
      CORS 때문에 실제 필요한 API 이용에 제한이 많다.
      React, NodeJS 가 같은 서버에서 작동될대는 Package.json 에 proxy  설정을 통하여 CORS 문제를 일부 해결할 수 있다.

      proxy 설정을 했을 경우는 fetch URL 부분에 http://localhost:3000 주소를 생략하고 router 주소만 사용하여 nodejs 와 데이터를 주고받을 수 있다.
    */
    const res = await fetch("food/insert", postOption);
    if (res.OK) {
      fetchFood().then((result) => {
        setFoods(result);
      });
    }
    setFood({
      d_id: uuid(),
      d_date: moment().format("YYYY[-]MM[-]DD"),
      d_food: "",
      d_qty: "",
      d_cal: "",
    });
  };
  return (
    <div className="w3-row-padding">
      <div className="w3-col s3">
        <input
          type="date"
          name="d_date"
          className="w3-input"
          value={food.d_date}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          placeholder="메뉴를 입력하세요"
          name="d_food"
          className="w3-input"
          value={food.d_food}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          placeholder="섭취수량을 입력하세요"
          name="d_qty"
          className="w3-input"
          value={food.d_qty}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          placeholder="단위 칼로리를 입력하세요"
          name="d_cal"
          className="w3-input"
          value={food.d_cal}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <button className="w3-button w3-blue" onClick={onClick}>
          저장하기
        </button>
      </div>
    </div>
  );
};
export default DietInput;
