import { useState, useContext } from "react";
import DietContext from "../context/DietContext";

const DietItem = ({ food }) => {
  /*
        식품명 표시된 곳을 클릭했을 때 input box 가 나타나도록 기능을 준다.
        1. DietList 에서 isEdit state 변수를 만들고 item 을 생성하면서 isEdit 변수의 상태에 따라 input box 또는 그냥 문자열이 나타나도록 하였다.
        ==> 모든 itme 이 isEdit 상태를 공유하게 되어 한개의 항목을 클릭하면 모든 항목에 input box 가 나타난다.

        2. DietItem 을 별도로 분리하고 DietItem 에서 isEdit 상태변수를 생성한 후 같은 코드로 input box 가 나타나도록 하였다.
        똑같은 이름의 isEdit 이지만 각 item 마다 서로 다른 isDeit 만들게 되어 클릭한 item 만 input box 가 나타나도록 변경된다.


    */
  const [isEdit, setEdit] = useState(false);

  const { removeFoodItem } = useContext(DietContext);
  const removeEvent = (e, d_id) => {
    // 표준 JS 함수중에서 react 에서 사용할 수 없는 함수들이 일부 있다.
    // 그 중 confirm 함수도 자체지원이 되지 않아서
    // browse 의 함수를 호출해야한다.
    if (window.confirm(d_id + "데이터를 삭제??")) {
      removeFoodItem(d_id);
    }
  };

  const onEdit = (e) => {
    setEdit(true);
  };

  const onKeypress = (e) => {
    if (e.keyCode === 13) {
      setEdit(false);
    }
  };
  return (
    <tr key={food.d_id}>
      <td>{food.d_date}</td>
      {isEdit ? (
        <td>
          <input
            name="d_food"
            defaultValue={food.d_food}
            onKeyDown={onKeypress}
          ></input>
        </td>
      ) : (
        <td onClick={onEdit}>{food.d_food}</td>
      )}
      <td>{food.d_qty}</td>
      <td>{food.d_cal}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          removeEvent(e, food.d_id);
        }}
      >
        &times;
      </td>
    </tr>
  );
};

export default DietItem;
