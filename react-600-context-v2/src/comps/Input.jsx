// Store(Context.Provider) import
import AppContext from "../context/Context";
import { useContext } from "react";
const Input = () => {
  // Context.Provider Store 에 보관된 2개의 state 변수와
  // 2개의 setState 함수를 사용요청한다.
  const { address, setAddrList, addrList, setAddress } = useContext(AppContext);

  // address state (객체)변수에서 각 요소를 추출 : input 에 쓰기 위해서
  const { a_name, a_tel, a_address } = address;

  const onChangeEvent = (e) => {
    const { name, value } = e.target;

    setAddress({ ...address, [name]: value });
  };

  const onClickEvent = (e) => {
    setAddrList([...addrList, address]);
  };
  return (
    <>
      <input
        onChange={onChangeEvent}
        name="a_name"
        placeholder="이름"
        value={a_name}
      />
      <input
        onChange={onChangeEvent}
        name="a_tel"
        placeholder="전화번호"
        value={a_tel}
      />
      <input
        onChange={onChangeEvent}
        name="a_address"
        placeholder="주소"
        value={a_address}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
};

export default Input;
